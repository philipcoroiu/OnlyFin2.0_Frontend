// pages/index.tsx

import React from 'react';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GridLayout() {

    const layouts: Layout[] = [
        { i: 'a', x: 0, y: 0, w: 1, h: 2 },
        { i: 'b', x: 1, y: 0, w: 3, h: 2 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ];

    return (
        <div style={{ marginTop: '50px' }}>
            <ResponsiveGridLayout
                className="layout"
                layouts={{ lg: layouts }}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                isResizable={true}
            >
                <div key="a" style={{ backgroundColor: 'lightblue' }}>
                    <span>a</span>
                </div>
                <div key="b" style={{ backgroundColor: 'lightgreen' }}>
                    <span>b</span>
                </div>
                <div key="c" style={{ backgroundColor: 'salmon' }}>
                    <span>c</span>
                </div>
            </ResponsiveGridLayout>
        </div>
    );
};
