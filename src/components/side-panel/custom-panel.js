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

import React from 'react';
import { FilterFunnel } from '../common/icons';

// This is a dummy component that can be replaced to inject more side panel sub panels into the side bar
function CustomPanelsFactory() {
  const CustomPanels = props => {
    
    const { setFilter, addFilter, datasets } = props;

    const removeFilters = () => {
      setFilter(0, 'value', []);
    }

    const onSetFilterTimeline = () => {
      // addFilter('country');
      addFilter(Object.keys(datasets)[0]);
      setFilter(0, 'name', 'yeatTS');
    };

    const onSetFilter = (value) => {
      // addFilter('country');
      addFilter(Object.keys(datasets)[0]);
      setFilter(0, 'name', 'Category');
      setFilter(0, 'value', [value]);
    };

    return (
      <div>
        <p style={{ color: 'white'}}>Cualquier cosa</p>
        {/* <button onClick={onAddFilter}>Add filter</button> */}
        <button onClick={removeFilters}>Remove filter</button>
        <button onClick={onSetFilterTimeline}>Timeline</button>
        <button onClick={ () => onSetFilter('Research trips')}>Research trips</button>
        <button onClick={ () => onSetFilter('Residency')}>Residency</button>

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
