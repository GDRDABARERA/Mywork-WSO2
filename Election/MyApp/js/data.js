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

var USA_POPULATION_DATA = [
    {
        "Alabama": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "American": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Asian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Alaska": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 32], ["Non Christian", 8], ["Other Faiths", 5], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 67], ["Non Christian", 5], ["Other Faiths", 2], ["Dont Know", 3]]
                        ,

                        "Asian": [["Christian", 12], ["Non Christian", 32], ["Other Faiths", 1], ["Dont Know", 0]]
                        ,

                        "Other": [["Christian", 23], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "American": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Asian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Other": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Non Christian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Other Faiths": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Dont Know": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Arizona": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 23], ["Non Christian", 1], ["Other Faiths", 3], ["Dont Know", 0]]
                        ,

                        "American": [["Christian", 21], ["Non Christian", 1], ["Other Faiths", 0], ["Dont Know", 1]]
                        ,

                        "Asian": [["Christian", 6], ["Non Christian", 20], ["Other Faiths", 1], ["Dont Know", 0]]
                        ,

                        "Other": [["Christian", 7], ["Non Christian", 1], ["Other Faiths", 5], ["Dont Know", 1]]
                    }],
                "gender": [{
                    "African American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "American": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Asian": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian":  [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Other Faiths": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Arkansas": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 76], ["Non Christian", 6], ["Other Faiths", 3], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 89], ["Non Christian", 3], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 60], ["Other Faiths", 1], ["Dont Know", 0]]
                        ,

                        "Other": [["Christian", 4], ["Non Christian", 1], ["Other Faiths", 0], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Other Faiths": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "California": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 45], ["Non Christian", 10], ["Other Faiths", 2], ["Dont Know", 0]]
                        ,

                        "American": [["Christian", 67], ["Non Christian", 6], ["Other Faiths", 5], ["Dont Know", 1]]
                        ,

                        "Asian": [["Christian", 13], ["Non Christian", 43], ["Other Faiths", 1], ["Dont Know", 0]]
                        ,

                        "Other": [["Christian", 10], ["Non Christian", 4], ["Other Faiths", 5], ["Dont Know", 1]]
                    }],
                "gender": [{
                    "African American": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Other": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Dont Know": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Colorado": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 67], ["Non Christian", 12], ["Other Faiths", 3], ["Dont Know", 5]]
                        ,

                        "American": [["Christian", 87], ["Non Christian", 10], ["Other Faiths", 5], ["Dont Know", 0]]
                        ,

                        "Asian": [["Christian", 20], ["Non Christian", 10], ["Other Faiths", 1], ["Dont Know", 0]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "American": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Asian": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Other": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Dont Know": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Connecticut": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 45], ["Non Christian", 1], ["Other Faiths", 0], ["Dont Know", 0]]
                        ,

                        "American": [["Christian", 79], ["Non Christian", 1], ["Other Faiths", 5], ["Dont Know", 1]]
                        ,

                        "Asian": [["Christian", 20], ["Non Christian", 56], ["Other Faiths", 6], ["Dont Know", 0]]
                        ,

                        "Other": [["Christian", 34], ["Non Christian", 1], ["Other Faiths", 4], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Other": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Non Christian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Other Faiths": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Dont Know": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Delaware": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 78], ["Non Christian", 12], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 87], ["Non Christian", 2], ["Other Faiths", 1], ["Dont Know", 0]]
                        ,

                        "Asian": [["Christian", 9], ["Non Christian", 60], ["Other Faiths", 3], ["Dont Know", 0]]
                        ,

                        "Other": [["Christian", 13], ["Non Christian", 6], ["Other Faiths", 4], ["Dont Know", 1]]
                    }],
                "gender": [{
                    "African American": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "American": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Asian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Other": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Non Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Other Faiths": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Dont Know": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "District of Columbia": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 54], ["Non Christian", 2], ["Other Faiths", 1], ["Dont Know", 0]]
                        ,

                        "American": [["Christian", 87], ["Non Christian", 2], ["Other Faiths", 5], ["Dont Know", 0]]
                        ,

                        "Asian": [["Christian", 1], ["Non Christian", 87], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 67], ["Non Christian", 23], ["Other Faiths", 15], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "American": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Asian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Other": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Florida": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 56], ["Non Christian", 12], ["Other Faiths", 2], ["Dont Know", 6]]
                        ,

                        "American": [["Christian", 89], ["Non Christian", 9], ["Other Faiths", 0], ["Dont Know", 1]]
                        ,

                        "Asian": [["Christian", 9], ["Non Christian", 78], ["Other Faiths", 1], ["Dont Know", 0]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "American": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Asian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Non Christian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Other Faiths": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Dont Know": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Georgia": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 56], ["Non Christian", 2], ["Other Faiths", 1], ["Dont Know", 0]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "American": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Asian": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Other": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Non Christian": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Hawaii": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "American": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "Asian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Non Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Idaho": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]],
                    "American": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Asian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Illinois": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "Dont Know": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Indiana": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Iowa": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "Dont Know": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Kansas": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Kentucky": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Louisiana": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Maine": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Maryland": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Massachusetts": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Michigan": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Minnesota": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Mississippi": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Missouri": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Montana": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Nebraska": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Nevada": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "New Hampshire": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "New Jersey": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "New Mexico": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "New York": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "North Carolina": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "North Dakota": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Ohio": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Oklahoma": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Oregon": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Pennsylvania": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Rhode Island": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "South Carolina": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "South Dakota": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Tennessee": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Texas": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Utah": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Vermont": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Virginia": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Washington": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "West Virginia": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Wisconsin": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        },
        "Wyoming": {
            "ethnicity": {
                "religion": [
                    {
                        "African American": [["Christian", 16], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 1]]
                        ,

                        "American": [["Christian", 23], ["Non Christian", 5], ["Other Faiths", 1], ["Dont Know", 2]]
                        ,

                        "Asian": [["Christian", 10], ["Non Christian", 20], ["Other Faiths", 2], ["Dont Know", 1]]
                        ,

                        "Other": [["Christian", 6], ["Non Christian", 3], ["Other Faiths", 1], ["Dont Know", 0]]
                    }],
                "gender": [{
                    "African American": [["Male", 45, 50, 33, 40, 57], ["Female", 55, 40, 66, 60, 43]],
                    "American": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Asian": [["Male", 15, 30, 13, 50, 47], ["Female", 25, 20, 26, 60, 33]],
                    "Other": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]]
                }],
                "income": [{
                    "African American": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "American": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Asian": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14],
                    "Other": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74]
                }]
            },
            "religion": {
                "gender": [{
                    "Christian": [["Male", 25, 30, 43, 20, 47], ["Female", 35, 20, 56, 40, 33]],
                    "Non Christian": [["Male", 55, 60, 44, 40, 57], ["Female", 65, 50, 65, 60, 43]],
                    "Other Faiths": [["Male", 23, 50, 66, 30, 67], ["Female", 33, 40, 33, 40, 53]],
                    "Dont Know": [["Male", 21, 40, 23, 60, 34], ["Female", 35, 20, 36, 40, 23]]
                }],
                "income": [{
                    "Christian": ["Income Rate", 31, 70, 63, 61, 40, 94, 96, 15, 44, 41, 91, 95, 39, 8, 9, 62, 34],
                    "Non Christian": ["Income Rate", 21, 40, 73, 31, 80, 14, 96, 45, 24, 21, 31, 95, 49, 8, 2, 52, 74],
                    "Other Faiths": ["Income Rate", 11, 50, 33, 21, 80, 44, 56, 95, 34, 21, 41, 65, 79, 98, 39, 62, 74],
                    "Dont Know": ["Income Rate", 51, 20, 33, 71, 90, 24, 46, 75, 14, 21, 81, 35, 99, 18, 29, 32, 14]
                }]
            }
        }
    }];