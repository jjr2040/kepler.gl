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

import { forEach } from '@loaders.gl/loader-utils';
import { filter } from 'fuzzy';
import React, { useEffect, useState } from 'react';
import { FilterFunnel } from '../common/icons';
import style from './custom-panel-style.js';
// import logopro from './logopro.png';

// This is a dummy component that can be replaced to inject more side panel sub panels into the side bar
function CustomPanelsFactory() {
  const CustomPanels = props => {
    const filterTypes = [
      { index: 0, columnName: 'Tc1'}, 
      { index: 1, columnName: 'Tc2'}, 
      { index: 2, columnName: 'Tc3'}, 
      { index: 3, columnName: 'Tc4'}, 
      { index: 4, columnName: 'Tc5'}, 
      { index: 5, columnName: 'Tc6'}, 
      { index: 6, columnName: 'disciplines'}, 
      { index: 7, columnName: 'Category'},
      { index: 8, columnName: 'yearTS'}
    ];
    const [TC1, TC2, TC3, TC4, TC5, TC6, DICIPLINES, CATEGORY, TIMELINE] = filterTypes;

    const { setFilter, addFilter, removeFilter, datasets, enlargeFilter, layerConfigChange, layers } = props;
    const [selectedFilters, setSelectedFilters] = useState([]);

    const filters = [
      {
        label: 'Timeline',
        keyword: 'yearTS',
        type: TIMELINE
      },
      {
        label: 'TC1',
        keyword: 'y',
        type: TC1
      },
      {
        label: 'TC2',
        keyword: 'y',
        type: TC2
      },
      {
        label: 'TC3',
        keyword: 'y',
        type: TC3
      },
      {
        label: 'TC4',
        keyword: 'y',
        type: TC4
      },
      {
        label: 'TC5',
        keyword: 'y',
        type: TC5
      },
      {
        label: 'TC6',
        keyword: 'y',
        type: TC6
      },
      {
        label: 'Literature',
        keyword: 'Literature',
        type: DICIPLINES
      },
      {
        label: 'Music',
        keyword: 'Music',
        type: DICIPLINES
      },
      {
        label: 'Visual Arts',
        keyword: 'Visual Arts',
        type: DICIPLINES
      },
      {
        label: 'Performing Arts',
        keyword: 'Performing Arts',
        type: DICIPLINES
      },
      {
        label: 'Multidisciplinary',
        keyword: 'Multidisciplinary',
        type: DICIPLINES
      },
      {
        label: 'Architecture',
        keyword: ' Architecture ',
        type: DICIPLINES
      },
      {
        label: '1',
        keyword: 'a',
        type: CATEGORY
      },
      {
        label: '2',
        keyword: 'b',
        type: CATEGORY
      },
      {
        label: '3',
        keyword: 'c',
        type: CATEGORY
      },
      {
        label: '4',
        keyword: 'd',
        type: CATEGORY
      },
      {
        label: '5',
        keyword: 'e',
        type: CATEGORY
      },
    ];

    useEffect(() => {
      // Agrega los filtros al iniciar
      filterTypes.forEach( () => {
        addFilter(Object.keys(datasets)[0])
      });

      // Se inicializa este layer con visible false para los related links
      layerConfigChange(layers[2], { isVisible: false } );
    }, []);

    useEffect(() => {
      // Agrega los filtros de tipo keyword

      filterTypes.forEach( filterType => {

        if (filterType.columnName == TIMELINE.columnName) 
          return; 

        const keywords = selectedFilters.filter(f => f.type.columnName == filterType.columnName)
                                        .map(f => f.keyword);
        
        setFilter(filterType.index, 'name', `${filterType.columnName}`);
        setFilter(filterType.index, 'value', keywords);
      });

      // Agrega los filtros de tipo TIMELINE
      selectedFilters
        .filter(f => f.type.columnName == TIMELINE.columnName)
        .forEach(({ keyword }) => {
          setFilter(TIMELINE.index, 'name', keyword);
        });
    }, [selectedFilters]);

    const removeFilters = () => {
      setSelectedFilters([]);
      removeFilter(TIMELINE.index);
      addFilter(Object.keys(datasets)[0]);
    };

    const Button = filter => {
      const { keyword, label, type } = filter;
      const buttonStyle = selectedFilters.find(f => f.keyword == keyword && f.type.columnName == type.columnName)
        ? style.button.selected
        : style.button;

      const action = () => {
        const filterIndex = selectedFilters.findIndex(f => f.keyword == keyword && f.type.columnName == type.columnName);

        if (filterIndex > -1) {

          const tcFilter = f => {
            return f.type.columnName !== type.columnName;
          };

          const othersFilter = f => {
            return f.keyword !== keyword;
          };

          const newFilters = selectedFilters.filter( type.columnName.startsWith('Tc') ? tcFilter : othersFilter );

          if (!newFilters.length) {
            removeFilters();
          } else {
            setSelectedFilters(newFilters);
          }
        } else {
          setSelectedFilters([...selectedFilters, filter]);
        }

        if (type.columnName == TIMELINE.columnName) {
          enlargeFilter(TIMELINE.index);
        }
      };

      return (
        <button style={buttonStyle} key={`${keyword}_${type.columnName}`} onClick={action}>
          {label}
        </button>
      );
    };

    const ToggleButton = ({label, isSelected}) => {

      const action = () => {
        layerConfigChange(layers[2], { isVisible: !layers[2].config.isVisible } );
      };

      const buttonStyle = isSelected ? style.button.selected : style.button;

      return (
        <button style={buttonStyle} onClick={action}>
          {label}
        </button>
      )
    }

    return (
      <div style={style.container}>
        <p style={style.title}>Use the timeline or choose keywords to filter the projects.</p>
        {filters.map(filter => Button(filter))}
        <ToggleButton label={"Related links"} isSelected={layers[2].config.isVisible} />
        <button style={style.removeButton} onClick={removeFilters}> Remove filters </button>
        <img style={style.logo} width="160" height="25" alt="logo" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F41%2FProhelvetia_Logo.svg%2F1134px-Prohelvetia_Logo.svg.png&f=1&nofb=1'} />
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
      }
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
