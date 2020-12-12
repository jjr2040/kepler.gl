// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, { useEffect, useState } from 'react';
import { FilterFunnel } from '../common/icons';
import style from './custom-panel-style.js';

// This is a dummy component that can be replaced to inject more side panel sub panels into the side bar
function CustomPanelsFactory() {
  
  const CustomPanels = props => {
    
    const TAG = 1;
    const FILTER = 0;
    
    const { setFilter, addFilter, removeFilter, datasets, enlargeFilter } = props;
    const [ selectedFilters, setSelectedFilters ] = useState([]);

    const filters = [
      {
        label: 'Ecology',
        keyword: 'ecology',
        type: FILTER
      },
      {
        label: 'Social narrative',
        keyword: 'social narrative',
        type: FILTER
      },
      {
        label: 'Timeline',
        keyword: 'yearTS',
        type: TAG
      }
    ];

    useEffect(() => {
      addFilter(Object.keys(datasets)[0]);
      addFilter(Object.keys(datasets)[0]);
    }, []);

    useEffect(() => {
      
      const keywords = selectedFilters.filter( f => f.type === FILTER).map( f => f.keyword);

      setFilter(FILTER, 'name', 'keywords');
      setFilter(FILTER, 'value', keywords);

      selectedFilters.filter( f => f.type === TAG)
                    .forEach( ({ keyword }) => {
                      setFilter(TAG, 'name', keyword);
      });
    }, [selectedFilters]);

    const removeFilters = () => {
      setSelectedFilters([]);
      removeFilter(TAG);
      addFilter(Object.keys(datasets)[0]);
    };

    const Button = filter => {

      const { keyword, label, type } = filter;
      const buttonStyle = selectedFilters.find( f => f.keyword === keyword ) ? style.button.selected : style.button;

      const action = () =>  {
        
        const filterIndex = selectedFilters.findIndex( f => f.keyword === keyword );
        
        if (filterIndex > -1) {
          const newFilters = selectedFilters.filter( f => f.keyword !== keyword );
          
          if (!newFilters.length) {
            removeFilters();
          } else {
            setSelectedFilters(newFilters);
          }
        } else {
          setSelectedFilters([...selectedFilters, filter]);
        }

        if (type === TAG) {
          enlargeFilter(TAG);
        }
      };

      return (
        <button 
          style={ buttonStyle } 
          key={keyword} 
          onClick={ action }>
            {label}
          </button>
      );
    };

    return (
      <div style={style.container}>
        <p style={style.title}>Cualquier cosa</p>
        <button onClick={removeFilters}>Remove filters</button>
        { filters.map( filter => Button(filter) ) }
      </div>
    );
  };

  CustomPanels.defaultProps = {
    // provide a list of additional panels
    panels: [
      {
        id: 'predefined-filters',
        label: 'Filters',
        iconComponent: FilterFunnel
      },
      // {
      //   id: 'chart',
      //   label: 'Chart',
      //   iconComponent: Icons.LineChart
      // }
    ],
    // prop selector from side panel props
    getProps: sidePanelProps => ({})
  };

  return CustomPanels;
}

export default CustomPanelsFactory;
