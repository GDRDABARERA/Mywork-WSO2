/**
 * Copyright (c) 2015, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
    var selectedState = "Alabama";
    var map = new Datamap({
        scope: 'usa',
        responsive: true,
        element: document.getElementById('us-map'),
        done: function (datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
                selectedState = geography.properties.name;
                console.log(selectedState);
                ethnicity.load({
                    columns: geography.properties.ethnicity
                });
                religious.load({
                    columns: geography.properties.religion
                });
                gender_chart.load({
                    columns: [
                        ['x', '20-30', '30-40', '40-50', '50-60', '60-70'],
                        geography.properties.gender[0],
                        geography.properties.gender[1]
                    ]
                });
                income_chart.load({
                    columns: [
                        ['x', '$19k - $20k', '$18k - $19k', '$17k - $18k', '$16k - $17k', '$15k - $16k', '$14k - $15k', '$13k - $14k', '$12k - $13k', '$11k - $12k', '$10k - $11k', '$9k - $10k', '$8k - $9k', '$7k - $8k', '$5k - $6k', '$4k - $5k', '$2k - $3k', '$1k - $2k', '$0k - $1k'],
                        geography.properties.income
                    ]
                });
            });
        }
    });

    window.addEventListener('resize', function () {
        map.resize();
    });

//alternatively with d3
    d3.select(window).on('resize', function () {
        map.resize();
    });

//alternatively with jQuery
    $(window).on('resize', function () {
        map.resize();
    });

    var ethnicity = c3.generate({
        bindto: '#ethnic_chart',
        data: {
            // iris data from R
            columns: [
                ['African American', 30],
                ['American', 120],
                ['Asian', 10],
                ['Other', 50]
            ],
            type: 'pie',
            onclick: function (d, element) {
                religious.load({
                    columns: USA_POPULATION_DATA[0][selectedState].ethnicity.religion[0][d.id]
                });

                gender_chart.load({
                    columns: [
                        ['x', '20-30', '30-40', '40-50', '50-60', '60-70'],
                        USA_POPULATION_DATA[0][selectedState].ethnicity.gender[0][d.id][0],
                        USA_POPULATION_DATA[0][selectedState].ethnicity.gender[0][d.id][1]
                    ]
                });

                income_chart.load({
                    columns: [
                        ['x', '$19k - $20k', '$18k - $19k', '$17k - $18k', '$16k - $17k', '$15k - $16k', '$14k - $15k', '$13k - $14k', '$12k - $13k', '$11k - $12k', '$10k - $11k', '$9k - $10k', '$8k - $9k', '$7k - $8k', '$5k - $6k', '$4k - $5k', '$2k - $3k', '$1k - $2k', '$0k - $1k'],
                        USA_POPULATION_DATA[0][selectedState].ethnicity.income[0][d.id]
                    ]
                });
            }
        }
    });
    var religious = c3.generate({
        bindto: '#religious_chart',
        data: {
            // iris data from R
            columns: [
                ['Christian', 70.6],
                ['Non Christian', 5.9],
                ['Other Faiths', 22.8],
                ['Dont Know', 0.6]
            ],
            type: 'pie',
            onclick: function(d,element){
                gender_chart.load({
                    columns: [
                        ['x', '20-30', '30-40', '40-50', '50-60', '60-70'],
                        USA_POPULATION_DATA[0][selectedState].religion.gender[0][d.id][0],
                        USA_POPULATION_DATA[0][selectedState].religion.gender[0][d.id][1]
                    ]
                });

                income_chart.load({
                    columns: [
                        ['x', '$19k - $20k', '$18k - $19k', '$17k - $18k', '$16k - $17k', '$15k - $16k', '$14k - $15k', '$13k - $14k', '$12k - $13k', '$11k - $12k', '$10k - $11k', '$9k - $10k', '$8k - $9k', '$7k - $8k', '$5k - $6k', '$4k - $5k', '$2k - $3k', '$1k - $2k', '$0k - $1k'],
                        USA_POPULATION_DATA[0][selectedState].religion.income[0][d.id]
                    ]
                });
            }
        }
    });
    var gender_chart = c3.generate({
        bindto: '#gender_chart',
        data: {
            x: 'x',
            columns: [
                ['x', '20-30', '30-40', '40-50', '50-60', '60-70'],
                ['Male', 30, 200, 100, 400, 200],
                ['Female', 90, 100, 140, 200, 100]
            ],
            groups: [
                ['gender']
            ],
            type: 'bar'
        },
        axis: {
            x: {
                type: 'category' // this needed to load string x value
            }
        },
        bar: {
            width: {
                ratio: 0.4 // this makes bar width 50% of length between ticks
            }
        }
    });

    $(".info-container h3").flipping_text({
        tickerTime: 10,
        customRandomChar: false,
        tickerCount: 10,
        opacityEffect: true,
        resetOnChange: false
    });

    var income_chart = c3.generate({
        bindto: '#income_chart',
        data: {
            x: 'x',
            columns: [
                ['x', '$19k - $20k', '$18k - $19k', '$17k - $18k', '$16k - $17k', '$15k - $16k', '$14k - $15k', '$13k - $14k', '$12k - $13k', '$11k - $12k', '$10k - $11k', '$9k - $10k', '$8k - $9k', '$7k - $8k', '$5k - $6k', '$4k - $5k', '$2k - $3k', '$1k - $2k', '$0k - $1k'],
                ['Income Rate', 70, 16, 74, 10, 69, 53, 5, 80, 20, 47, 9, 30, 28, 4, 82, 60, 92]
            ],
            groups: [
                ['gender']
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.4 // this makes bar width 50% of length between ticks
            }
        },
        axis: {
            x: {
                type: 'category',
                label: {
                    text: 'Income Categories',
                    position: 'outer-middle'
                }
            },
            y: {
                type: 'category',
                label: {
                    text: 'Household Percentage',
                    position: 'outer-middle'
                }
            }
        }
    });
}());