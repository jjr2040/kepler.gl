// Copyright (c) 2021 Uber Technologies, Inc.
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

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    selected: {
      backgroundColor: '#f56fba',
      border: 'none',
      padding: '3px 32px',
      margin: '8px 2px',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)'
    },
    backgroundColor: '#D9D9D9',
    border: 'none',
    padding: '1px 32px',
    margin: '8px 2px',
    borderRadius: '8px',
    cursor: 'pointer',
    hoverBackgroundColor: 'white'
  },
  title: {
    color: 'white'
  },
  removeButton: {
    backgroundColor: '#f24bae',
    border: 'none',
    padding: '1px 32px',
    margin: '18px 2px',
    cursor: 'pointer',
    borderRadius: '8px'
  },
  logo: {
    alignSelf: 'flex-end',
    margin: '20px 2px'
  }
};

export default style;