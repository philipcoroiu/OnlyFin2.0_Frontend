"use client"
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, {useState} from "react";

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function Example() {

    const [studioChart, setStudioChart] = useState({
        chart: {
            type: "line",
            style: {
                fontFamily: "Tahoma"
            },
            animation: {
                duration: 0,
                easing: 'linear'
            },

            renderTo: 'container'
        },
        style: {
            borderColor: "#1A1616"
        },
        title: {
            text: "",
            style: {
                color: "#1A1616",
                fontWeight: "lighter"
            }
        },
        xAxis: {
            title: {
                text: "",
                style: {
                    color: "#1A1616"
                }
            },
            categories: ["Category 1"],
            labels: {
                style: {
                    color: "#1A1616"
                }
            },
            gridLineColor: "#1A1616"
        },
        yAxis: {
            title: {
                text: "",
                style: {
                    color: "#1A1616"
                }
            },
            gridLineColor: "#1A1616",
            labels: {
                style: {
                    color: "#1A1616"
                }
            }
        },
        labels: {
            style: {
                color: "#1A1616"
            }
        },
        plotOptions: {
            series: {
                animation: {
                    duration: 0
                }
            }
        },
        series: [{
            name: "name",
            data: [""],
            borderWidth: 0,
            color: "#39a22a",
        }],
    });

    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-6xl">Dashboard</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key="" href="" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <HighchartsReact
                                    containerProps={{style: {height: '100%', weight: '100%'}}}
                                    highcharts={Highcharts}
                                    options={studioChart}
                                />
                                
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
