/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 3002.0, "series": [{"data": [[0.0, 18.0], [0.1, 18.0], [0.2, 22.0], [0.3, 22.0], [0.4, 23.0], [0.5, 24.0], [0.6, 24.0], [0.7, 30.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 36.0], [1.4, 36.0], [1.5, 37.0], [1.6, 38.0], [1.7, 38.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 40.0], [2.2, 41.0], [2.3, 42.0], [2.4, 43.0], [2.5, 43.0], [2.6, 43.0], [2.7, 43.0], [2.8, 46.0], [2.9, 46.0], [3.0, 47.0], [3.1, 47.0], [3.2, 47.0], [3.3, 47.0], [3.4, 48.0], [3.5, 49.0], [3.6, 49.0], [3.7, 49.0], [3.8, 50.0], [3.9, 50.0], [4.0, 53.0], [4.1, 53.0], [4.2, 53.0], [4.3, 54.0], [4.4, 55.0], [4.5, 55.0], [4.6, 55.0], [4.7, 55.0], [4.8, 55.0], [4.9, 56.0], [5.0, 59.0], [5.1, 59.0], [5.2, 60.0], [5.3, 61.0], [5.4, 64.0], [5.5, 65.0], [5.6, 66.0], [5.7, 67.0], [5.8, 72.0], [5.9, 73.0], [6.0, 73.0], [6.1, 74.0], [6.2, 74.0], [6.3, 75.0], [6.4, 76.0], [6.5, 77.0], [6.6, 77.0], [6.7, 80.0], [6.8, 85.0], [6.9, 87.0], [7.0, 87.0], [7.1, 87.0], [7.2, 88.0], [7.3, 88.0], [7.4, 89.0], [7.5, 91.0], [7.6, 94.0], [7.7, 96.0], [7.8, 98.0], [7.9, 100.0], [8.0, 100.0], [8.1, 100.0], [8.2, 100.0], [8.3, 101.0], [8.4, 102.0], [8.5, 105.0], [8.6, 105.0], [8.7, 110.0], [8.8, 115.0], [8.9, 119.0], [9.0, 119.0], [9.1, 123.0], [9.2, 125.0], [9.3, 126.0], [9.4, 126.0], [9.5, 128.0], [9.6, 129.0], [9.7, 132.0], [9.8, 132.0], [9.9, 133.0], [10.0, 134.0], [10.1, 135.0], [10.2, 136.0], [10.3, 137.0], [10.4, 138.0], [10.5, 138.0], [10.6, 141.0], [10.7, 142.0], [10.8, 142.0], [10.9, 142.0], [11.0, 143.0], [11.1, 144.0], [11.2, 144.0], [11.3, 144.0], [11.4, 145.0], [11.5, 145.0], [11.6, 147.0], [11.7, 148.0], [11.8, 148.0], [11.9, 148.0], [12.0, 153.0], [12.1, 154.0], [12.2, 155.0], [12.3, 157.0], [12.4, 158.0], [12.5, 184.0], [12.6, 185.0], [12.7, 189.0], [12.8, 194.0], [12.9, 196.0], [13.0, 197.0], [13.1, 199.0], [13.2, 200.0], [13.3, 202.0], [13.4, 206.0], [13.5, 223.0], [13.6, 224.0], [13.7, 224.0], [13.8, 224.0], [13.9, 225.0], [14.0, 226.0], [14.1, 226.0], [14.2, 227.0], [14.3, 229.0], [14.4, 230.0], [14.5, 231.0], [14.6, 233.0], [14.7, 233.0], [14.8, 234.0], [14.9, 235.0], [15.0, 236.0], [15.1, 238.0], [15.2, 240.0], [15.3, 241.0], [15.4, 242.0], [15.5, 244.0], [15.6, 244.0], [15.7, 245.0], [15.8, 245.0], [15.9, 246.0], [16.0, 246.0], [16.1, 247.0], [16.2, 248.0], [16.3, 249.0], [16.4, 250.0], [16.5, 253.0], [16.6, 254.0], [16.7, 256.0], [16.8, 256.0], [16.9, 256.0], [17.0, 257.0], [17.1, 258.0], [17.2, 258.0], [17.3, 259.0], [17.4, 259.0], [17.5, 259.0], [17.6, 260.0], [17.7, 261.0], [17.8, 261.0], [17.9, 263.0], [18.0, 263.0], [18.1, 263.0], [18.2, 263.0], [18.3, 263.0], [18.4, 264.0], [18.5, 265.0], [18.6, 266.0], [18.7, 266.0], [18.8, 266.0], [18.9, 267.0], [19.0, 268.0], [19.1, 269.0], [19.2, 269.0], [19.3, 270.0], [19.4, 271.0], [19.5, 271.0], [19.6, 271.0], [19.7, 272.0], [19.8, 272.0], [19.9, 272.0], [20.0, 273.0], [20.1, 273.0], [20.2, 273.0], [20.3, 274.0], [20.4, 274.0], [20.5, 275.0], [20.6, 275.0], [20.7, 275.0], [20.8, 276.0], [20.9, 276.0], [21.0, 276.0], [21.1, 277.0], [21.2, 278.0], [21.3, 278.0], [21.4, 278.0], [21.5, 279.0], [21.6, 279.0], [21.7, 279.0], [21.8, 279.0], [21.9, 279.0], [22.0, 280.0], [22.1, 280.0], [22.2, 280.0], [22.3, 280.0], [22.4, 280.0], [22.5, 280.0], [22.6, 281.0], [22.7, 281.0], [22.8, 281.0], [22.9, 282.0], [23.0, 282.0], [23.1, 283.0], [23.2, 283.0], [23.3, 284.0], [23.4, 284.0], [23.5, 284.0], [23.6, 285.0], [23.7, 285.0], [23.8, 286.0], [23.9, 286.0], [24.0, 287.0], [24.1, 287.0], [24.2, 287.0], [24.3, 287.0], [24.4, 287.0], [24.5, 287.0], [24.6, 288.0], [24.7, 288.0], [24.8, 289.0], [24.9, 289.0], [25.0, 290.0], [25.1, 290.0], [25.2, 290.0], [25.3, 290.0], [25.4, 291.0], [25.5, 291.0], [25.6, 292.0], [25.7, 292.0], [25.8, 293.0], [25.9, 294.0], [26.0, 294.0], [26.1, 295.0], [26.2, 297.0], [26.3, 297.0], [26.4, 298.0], [26.5, 298.0], [26.6, 299.0], [26.7, 299.0], [26.8, 299.0], [26.9, 300.0], [27.0, 300.0], [27.1, 300.0], [27.2, 301.0], [27.3, 301.0], [27.4, 302.0], [27.5, 302.0], [27.6, 303.0], [27.7, 303.0], [27.8, 304.0], [27.9, 304.0], [28.0, 305.0], [28.1, 305.0], [28.2, 306.0], [28.3, 306.0], [28.4, 307.0], [28.5, 308.0], [28.6, 310.0], [28.7, 310.0], [28.8, 310.0], [28.9, 311.0], [29.0, 311.0], [29.1, 312.0], [29.2, 312.0], [29.3, 312.0], [29.4, 313.0], [29.5, 313.0], [29.6, 315.0], [29.7, 315.0], [29.8, 316.0], [29.9, 316.0], [30.0, 316.0], [30.1, 317.0], [30.2, 317.0], [30.3, 317.0], [30.4, 317.0], [30.5, 319.0], [30.6, 319.0], [30.7, 319.0], [30.8, 320.0], [30.9, 320.0], [31.0, 320.0], [31.1, 320.0], [31.2, 320.0], [31.3, 321.0], [31.4, 321.0], [31.5, 322.0], [31.6, 322.0], [31.7, 322.0], [31.8, 323.0], [31.9, 323.0], [32.0, 323.0], [32.1, 324.0], [32.2, 324.0], [32.3, 324.0], [32.4, 325.0], [32.5, 325.0], [32.6, 326.0], [32.7, 326.0], [32.8, 326.0], [32.9, 327.0], [33.0, 328.0], [33.1, 328.0], [33.2, 328.0], [33.3, 328.0], [33.4, 328.0], [33.5, 328.0], [33.6, 329.0], [33.7, 330.0], [33.8, 330.0], [33.9, 330.0], [34.0, 330.0], [34.1, 330.0], [34.2, 331.0], [34.3, 331.0], [34.4, 331.0], [34.5, 332.0], [34.6, 332.0], [34.7, 332.0], [34.8, 332.0], [34.9, 333.0], [35.0, 334.0], [35.1, 334.0], [35.2, 334.0], [35.3, 336.0], [35.4, 337.0], [35.5, 337.0], [35.6, 337.0], [35.7, 337.0], [35.8, 337.0], [35.9, 338.0], [36.0, 338.0], [36.1, 338.0], [36.2, 338.0], [36.3, 339.0], [36.4, 339.0], [36.5, 339.0], [36.6, 339.0], [36.7, 340.0], [36.8, 340.0], [36.9, 340.0], [37.0, 341.0], [37.1, 341.0], [37.2, 342.0], [37.3, 342.0], [37.4, 343.0], [37.5, 344.0], [37.6, 344.0], [37.7, 344.0], [37.8, 345.0], [37.9, 345.0], [38.0, 345.0], [38.1, 345.0], [38.2, 345.0], [38.3, 345.0], [38.4, 345.0], [38.5, 345.0], [38.6, 347.0], [38.7, 347.0], [38.8, 347.0], [38.9, 348.0], [39.0, 349.0], [39.1, 349.0], [39.2, 350.0], [39.3, 351.0], [39.4, 351.0], [39.5, 351.0], [39.6, 352.0], [39.7, 352.0], [39.8, 352.0], [39.9, 353.0], [40.0, 354.0], [40.1, 354.0], [40.2, 354.0], [40.3, 356.0], [40.4, 356.0], [40.5, 357.0], [40.6, 358.0], [40.7, 359.0], [40.8, 359.0], [40.9, 359.0], [41.0, 360.0], [41.1, 360.0], [41.2, 360.0], [41.3, 360.0], [41.4, 361.0], [41.5, 361.0], [41.6, 361.0], [41.7, 361.0], [41.8, 362.0], [41.9, 362.0], [42.0, 362.0], [42.1, 362.0], [42.2, 363.0], [42.3, 364.0], [42.4, 364.0], [42.5, 364.0], [42.6, 365.0], [42.7, 366.0], [42.8, 366.0], [42.9, 366.0], [43.0, 367.0], [43.1, 367.0], [43.2, 368.0], [43.3, 368.0], [43.4, 368.0], [43.5, 369.0], [43.6, 370.0], [43.7, 370.0], [43.8, 371.0], [43.9, 371.0], [44.0, 371.0], [44.1, 372.0], [44.2, 372.0], [44.3, 373.0], [44.4, 373.0], [44.5, 373.0], [44.6, 373.0], [44.7, 375.0], [44.8, 376.0], [44.9, 376.0], [45.0, 378.0], [45.1, 378.0], [45.2, 378.0], [45.3, 378.0], [45.4, 379.0], [45.5, 381.0], [45.6, 381.0], [45.7, 382.0], [45.8, 382.0], [45.9, 382.0], [46.0, 383.0], [46.1, 384.0], [46.2, 385.0], [46.3, 386.0], [46.4, 386.0], [46.5, 387.0], [46.6, 387.0], [46.7, 388.0], [46.8, 389.0], [46.9, 390.0], [47.0, 390.0], [47.1, 391.0], [47.2, 392.0], [47.3, 392.0], [47.4, 392.0], [47.5, 393.0], [47.6, 394.0], [47.7, 394.0], [47.8, 394.0], [47.9, 396.0], [48.0, 397.0], [48.1, 397.0], [48.2, 399.0], [48.3, 399.0], [48.4, 400.0], [48.5, 401.0], [48.6, 401.0], [48.7, 402.0], [48.8, 402.0], [48.9, 403.0], [49.0, 403.0], [49.1, 403.0], [49.2, 406.0], [49.3, 408.0], [49.4, 410.0], [49.5, 410.0], [49.6, 410.0], [49.7, 410.0], [49.8, 411.0], [49.9, 413.0], [50.0, 413.0], [50.1, 413.0], [50.2, 413.0], [50.3, 414.0], [50.4, 415.0], [50.5, 416.0], [50.6, 417.0], [50.7, 418.0], [50.8, 419.0], [50.9, 420.0], [51.0, 421.0], [51.1, 421.0], [51.2, 422.0], [51.3, 422.0], [51.4, 422.0], [51.5, 424.0], [51.6, 425.0], [51.7, 426.0], [51.8, 428.0], [51.9, 429.0], [52.0, 429.0], [52.1, 430.0], [52.2, 431.0], [52.3, 432.0], [52.4, 433.0], [52.5, 434.0], [52.6, 435.0], [52.7, 438.0], [52.8, 438.0], [52.9, 439.0], [53.0, 440.0], [53.1, 443.0], [53.2, 443.0], [53.3, 444.0], [53.4, 444.0], [53.5, 444.0], [53.6, 444.0], [53.7, 444.0], [53.8, 446.0], [53.9, 448.0], [54.0, 449.0], [54.1, 450.0], [54.2, 451.0], [54.3, 452.0], [54.4, 452.0], [54.5, 456.0], [54.6, 457.0], [54.7, 457.0], [54.8, 457.0], [54.9, 458.0], [55.0, 458.0], [55.1, 458.0], [55.2, 459.0], [55.3, 460.0], [55.4, 461.0], [55.5, 462.0], [55.6, 462.0], [55.7, 462.0], [55.8, 462.0], [55.9, 462.0], [56.0, 463.0], [56.1, 463.0], [56.2, 463.0], [56.3, 465.0], [56.4, 467.0], [56.5, 467.0], [56.6, 467.0], [56.7, 469.0], [56.8, 472.0], [56.9, 472.0], [57.0, 473.0], [57.1, 473.0], [57.2, 474.0], [57.3, 474.0], [57.4, 474.0], [57.5, 477.0], [57.6, 478.0], [57.7, 478.0], [57.8, 478.0], [57.9, 478.0], [58.0, 479.0], [58.1, 480.0], [58.2, 480.0], [58.3, 480.0], [58.4, 486.0], [58.5, 487.0], [58.6, 488.0], [58.7, 491.0], [58.8, 495.0], [58.9, 495.0], [59.0, 496.0], [59.1, 497.0], [59.2, 498.0], [59.3, 498.0], [59.4, 498.0], [59.5, 499.0], [59.6, 499.0], [59.7, 499.0], [59.8, 499.0], [59.9, 499.0], [60.0, 499.0], [60.1, 500.0], [60.2, 500.0], [60.3, 503.0], [60.4, 505.0], [60.5, 506.0], [60.6, 508.0], [60.7, 508.0], [60.8, 509.0], [60.9, 511.0], [61.0, 512.0], [61.1, 513.0], [61.2, 514.0], [61.3, 514.0], [61.4, 514.0], [61.5, 515.0], [61.6, 515.0], [61.7, 515.0], [61.8, 516.0], [61.9, 516.0], [62.0, 516.0], [62.1, 516.0], [62.2, 517.0], [62.3, 518.0], [62.4, 518.0], [62.5, 518.0], [62.6, 518.0], [62.7, 519.0], [62.8, 519.0], [62.9, 520.0], [63.0, 520.0], [63.1, 521.0], [63.2, 521.0], [63.3, 522.0], [63.4, 522.0], [63.5, 523.0], [63.6, 523.0], [63.7, 523.0], [63.8, 524.0], [63.9, 524.0], [64.0, 524.0], [64.1, 524.0], [64.2, 524.0], [64.3, 525.0], [64.4, 525.0], [64.5, 529.0], [64.6, 531.0], [64.7, 531.0], [64.8, 534.0], [64.9, 535.0], [65.0, 536.0], [65.1, 536.0], [65.2, 536.0], [65.3, 536.0], [65.4, 537.0], [65.5, 537.0], [65.6, 538.0], [65.7, 538.0], [65.8, 539.0], [65.9, 539.0], [66.0, 539.0], [66.1, 539.0], [66.2, 541.0], [66.3, 541.0], [66.4, 541.0], [66.5, 541.0], [66.6, 543.0], [66.7, 543.0], [66.8, 545.0], [66.9, 545.0], [67.0, 549.0], [67.1, 551.0], [67.2, 551.0], [67.3, 551.0], [67.4, 552.0], [67.5, 552.0], [67.6, 554.0], [67.7, 555.0], [67.8, 559.0], [67.9, 560.0], [68.0, 561.0], [68.1, 561.0], [68.2, 563.0], [68.3, 564.0], [68.4, 564.0], [68.5, 565.0], [68.6, 566.0], [68.7, 566.0], [68.8, 566.0], [68.9, 568.0], [69.0, 569.0], [69.1, 569.0], [69.2, 570.0], [69.3, 571.0], [69.4, 572.0], [69.5, 574.0], [69.6, 574.0], [69.7, 574.0], [69.8, 576.0], [69.9, 576.0], [70.0, 577.0], [70.1, 578.0], [70.2, 579.0], [70.3, 579.0], [70.4, 579.0], [70.5, 580.0], [70.6, 580.0], [70.7, 580.0], [70.8, 580.0], [70.9, 580.0], [71.0, 581.0], [71.1, 581.0], [71.2, 581.0], [71.3, 581.0], [71.4, 581.0], [71.5, 581.0], [71.6, 583.0], [71.7, 583.0], [71.8, 584.0], [71.9, 584.0], [72.0, 585.0], [72.1, 585.0], [72.2, 586.0], [72.3, 587.0], [72.4, 587.0], [72.5, 588.0], [72.6, 589.0], [72.7, 590.0], [72.8, 590.0], [72.9, 591.0], [73.0, 591.0], [73.1, 591.0], [73.2, 593.0], [73.3, 594.0], [73.4, 594.0], [73.5, 595.0], [73.6, 595.0], [73.7, 597.0], [73.8, 600.0], [73.9, 600.0], [74.0, 600.0], [74.1, 601.0], [74.2, 602.0], [74.3, 602.0], [74.4, 602.0], [74.5, 603.0], [74.6, 603.0], [74.7, 604.0], [74.8, 606.0], [74.9, 607.0], [75.0, 607.0], [75.1, 609.0], [75.2, 610.0], [75.3, 610.0], [75.4, 611.0], [75.5, 611.0], [75.6, 612.0], [75.7, 614.0], [75.8, 616.0], [75.9, 618.0], [76.0, 618.0], [76.1, 621.0], [76.2, 621.0], [76.3, 624.0], [76.4, 624.0], [76.5, 625.0], [76.6, 625.0], [76.7, 625.0], [76.8, 626.0], [76.9, 626.0], [77.0, 627.0], [77.1, 628.0], [77.2, 628.0], [77.3, 629.0], [77.4, 630.0], [77.5, 630.0], [77.6, 631.0], [77.7, 633.0], [77.8, 633.0], [77.9, 634.0], [78.0, 635.0], [78.1, 635.0], [78.2, 635.0], [78.3, 635.0], [78.4, 636.0], [78.5, 636.0], [78.6, 638.0], [78.7, 641.0], [78.8, 641.0], [78.9, 642.0], [79.0, 647.0], [79.1, 647.0], [79.2, 648.0], [79.3, 648.0], [79.4, 648.0], [79.5, 648.0], [79.6, 650.0], [79.7, 650.0], [79.8, 650.0], [79.9, 650.0], [80.0, 652.0], [80.1, 652.0], [80.2, 652.0], [80.3, 652.0], [80.4, 653.0], [80.5, 655.0], [80.6, 655.0], [80.7, 655.0], [80.8, 656.0], [80.9, 657.0], [81.0, 658.0], [81.1, 658.0], [81.2, 659.0], [81.3, 659.0], [81.4, 660.0], [81.5, 660.0], [81.6, 660.0], [81.7, 661.0], [81.8, 662.0], [81.9, 663.0], [82.0, 665.0], [82.1, 666.0], [82.2, 667.0], [82.3, 668.0], [82.4, 668.0], [82.5, 671.0], [82.6, 672.0], [82.7, 672.0], [82.8, 672.0], [82.9, 672.0], [83.0, 673.0], [83.1, 673.0], [83.2, 674.0], [83.3, 674.0], [83.4, 674.0], [83.5, 674.0], [83.6, 675.0], [83.7, 675.0], [83.8, 676.0], [83.9, 676.0], [84.0, 678.0], [84.1, 678.0], [84.2, 679.0], [84.3, 679.0], [84.4, 680.0], [84.5, 680.0], [84.6, 681.0], [84.7, 682.0], [84.8, 682.0], [84.9, 683.0], [85.0, 683.0], [85.1, 683.0], [85.2, 683.0], [85.3, 684.0], [85.4, 684.0], [85.5, 684.0], [85.6, 684.0], [85.7, 685.0], [85.8, 685.0], [85.9, 687.0], [86.0, 688.0], [86.1, 688.0], [86.2, 689.0], [86.3, 690.0], [86.4, 690.0], [86.5, 691.0], [86.6, 691.0], [86.7, 692.0], [86.8, 693.0], [86.9, 694.0], [87.0, 694.0], [87.1, 695.0], [87.2, 695.0], [87.3, 698.0], [87.4, 698.0], [87.5, 698.0], [87.6, 699.0], [87.7, 701.0], [87.8, 701.0], [87.9, 702.0], [88.0, 703.0], [88.1, 703.0], [88.2, 704.0], [88.3, 704.0], [88.4, 704.0], [88.5, 705.0], [88.6, 705.0], [88.7, 706.0], [88.8, 706.0], [88.9, 707.0], [89.0, 707.0], [89.1, 707.0], [89.2, 707.0], [89.3, 708.0], [89.4, 708.0], [89.5, 709.0], [89.6, 710.0], [89.7, 711.0], [89.8, 711.0], [89.9, 712.0], [90.0, 713.0], [90.1, 714.0], [90.2, 714.0], [90.3, 715.0], [90.4, 715.0], [90.5, 715.0], [90.6, 718.0], [90.7, 718.0], [90.8, 719.0], [90.9, 719.0], [91.0, 719.0], [91.1, 719.0], [91.2, 722.0], [91.3, 723.0], [91.4, 724.0], [91.5, 725.0], [91.6, 726.0], [91.7, 728.0], [91.8, 728.0], [91.9, 728.0], [92.0, 729.0], [92.1, 730.0], [92.2, 733.0], [92.3, 734.0], [92.4, 736.0], [92.5, 738.0], [92.6, 740.0], [92.7, 745.0], [92.8, 749.0], [92.9, 753.0], [93.0, 754.0], [93.1, 756.0], [93.2, 776.0], [93.3, 811.0], [93.4, 910.0], [93.5, 911.0], [93.6, 912.0], [93.7, 913.0], [93.8, 915.0], [93.9, 915.0], [94.0, 916.0], [94.1, 916.0], [94.2, 917.0], [94.3, 921.0], [94.4, 922.0], [94.5, 922.0], [94.6, 923.0], [94.7, 925.0], [94.8, 927.0], [94.9, 931.0], [95.0, 941.0], [95.1, 942.0], [95.2, 942.0], [95.3, 943.0], [95.4, 945.0], [95.5, 954.0], [95.6, 954.0], [95.7, 955.0], [95.8, 956.0], [95.9, 962.0], [96.0, 964.0], [96.1, 966.0], [96.2, 968.0], [96.3, 969.0], [96.4, 984.0], [96.5, 996.0], [96.6, 998.0], [96.7, 1003.0], [96.8, 1010.0], [96.9, 1023.0], [97.0, 1031.0], [97.1, 1043.0], [97.2, 1051.0], [97.3, 1052.0], [97.4, 1067.0], [97.5, 1075.0], [97.6, 1089.0], [97.7, 1090.0], [97.8, 1090.0], [97.9, 1117.0], [98.0, 1119.0], [98.1, 1121.0], [98.2, 1121.0], [98.3, 1123.0], [98.4, 1138.0], [98.5, 1146.0], [98.6, 1147.0], [98.7, 1148.0], [98.8, 1152.0], [98.9, 1153.0], [99.0, 1153.0], [99.1, 1153.0], [99.2, 1157.0], [99.3, 1167.0], [99.4, 1173.0], [99.5, 1177.0], [99.6, 1184.0], [99.7, 1200.0], [99.8, 2116.0], [99.9, 3002.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 214.0, "series": [{"data": [[0.0, 79.0], [2100.0, 1.0], [600.0, 139.0], [700.0, 56.0], [3000.0, 1.0], [200.0, 137.0], [800.0, 1.0], [900.0, 33.0], [1000.0, 12.0], [1100.0, 18.0], [300.0, 214.0], [1200.0, 1.0], [100.0, 53.0], [400.0, 117.0], [500.0, 138.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 602.0, "series": [{"data": [[0.0, 602.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 396.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 218.21799999999965, "minX": 1.69977882E12, "maxY": 218.21799999999965, "series": [{"data": [[1.69977882E12, 218.21799999999965]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977882E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 30.0, "minX": 1.0, "maxY": 3002.0, "series": [{"data": [[2.0, 3002.0], [22.0, 42.666666666666664], [23.0, 51.5], [24.0, 47.5], [25.0, 43.5], [26.0, 42.5], [27.0, 42.333333333333336], [28.0, 41.5], [29.0, 44.0], [30.0, 45.0], [31.0, 66.0], [32.0, 41.75], [33.0, 30.0], [34.0, 62.5], [36.0, 30.25], [37.0, 46.5], [38.0, 70.5], [40.0, 74.0], [41.0, 87.0], [47.0, 80.0], [50.0, 34.0], [51.0, 46.0], [52.0, 40.0], [56.0, 98.0], [57.0, 43.0], [58.0, 136.0], [61.0, 1005.8135593220338], [63.0, 220.5], [62.0, 749.0], [64.0, 402.0], [67.0, 401.5], [66.0, 745.0], [65.0, 740.0], [69.0, 55.0], [70.0, 504.3333333333333], [71.0, 728.0], [68.0, 754.0], [74.0, 277.66666666666663], [73.0, 422.0], [72.0, 393.0], [75.0, 723.0], [79.0, 719.0], [78.0, 715.0], [77.0, 724.0], [76.0, 712.0], [80.0, 418.0], [83.0, 714.0], [82.0, 719.0], [81.0, 714.0], [87.0, 691.0], [86.0, 698.5], [84.0, 713.0], [88.0, 390.0], [91.0, 307.0], [90.0, 697.0], [94.0, 431.5], [95.0, 708.0], [93.0, 711.0], [92.0, 705.0], [96.0, 403.0], [98.0, 394.0], [99.0, 715.0], [97.0, 706.0], [101.0, 486.0], [102.0, 682.0], [107.0, 390.5], [106.0, 684.0], [104.0, 684.0], [108.0, 286.33333333333337], [109.0, 294.66666666666663], [111.0, 689.5], [112.0, 383.5], [114.0, 91.0], [115.0, 385.5], [113.0, 386.5], [118.0, 288.33333333333337], [117.0, 398.5], [119.0, 661.0], [116.0, 671.0], [122.0, 392.0], [123.0, 657.0], [121.0, 660.0], [120.0, 679.0], [127.0, 385.0], [126.0, 652.0], [125.0, 658.0], [124.0, 655.0], [128.0, 376.0], [135.0, 473.0], [134.0, 486.0], [133.0, 490.3333333333333], [131.0, 526.5], [132.0, 523.5], [130.0, 565.3333333333334], [143.0, 436.8333333333333], [142.0, 447.25], [139.0, 397.5], [137.0, 457.75], [141.0, 559.3333333333334], [140.0, 476.5], [138.0, 564.0], [136.0, 636.0], [150.0, 410.5], [146.0, 508.5], [145.0, 452.55555555555554], [144.0, 473.7142857142857], [151.0, 614.0], [149.0, 635.0], [148.0, 630.0], [147.0, 624.0], [159.0, 487.0], [153.0, 495.5], [158.0, 607.0], [157.0, 610.0], [156.0, 602.0], [155.0, 618.0], [154.0, 609.0], [152.0, 611.0], [167.0, 368.99999999999994], [166.0, 382.0], [165.0, 409.14285714285717], [164.0, 358.22222222222223], [163.0, 376.2307692307692], [160.0, 388.7272727272727], [161.0, 431.3333333333333], [162.0, 463.0], [169.0, 268.33333333333337], [172.0, 328.6], [174.0, 310.72727272727275], [175.0, 336.8], [170.0, 317.0], [171.0, 425.8], [173.0, 443.5], [168.0, 391.25], [179.0, 324.25], [180.0, 270.3], [183.0, 136.71428571428572], [182.0, 224.2], [181.0, 276.625], [178.0, 305.6666666666667], [177.0, 324.83333333333337], [176.0, 570.0], [185.0, 323.5], [184.0, 425.75], [186.0, 501.5], [191.0, 369.0], [190.0, 312.3333333333333], [189.0, 367.5], [188.0, 541.0], [187.0, 539.0], [193.0, 350.5], [196.0, 367.5], [195.0, 365.0], [194.0, 515.6666666666666], [192.0, 331.5], [198.0, 526.0], [199.0, 525.0], [197.0, 529.0], [206.0, 372.0], [205.0, 299.75], [204.0, 421.83333333333337], [203.0, 324.5], [202.0, 279.85714285714283], [200.0, 522.0], [201.0, 524.0], [209.0, 257.0], [214.0, 312.0], [216.0, 404.2], [222.0, 310.66666666666663], [223.0, 223.0], [221.0, 341.5], [220.0, 281.5], [219.0, 434.0], [218.0, 299.0], [217.0, 305.0], [226.0, 281.0], [228.0, 371.6666666666667], [229.0, 302.0], [227.0, 283.5], [225.0, 278.75], [231.0, 324.0], [239.0, 330.6666666666667], [237.0, 264.3333333333333], [238.0, 206.0], [236.0, 296.0], [235.0, 304.3333333333333], [234.0, 245.8], [233.0, 254.5], [232.0, 293.66666666666663], [240.0, 351.0], [245.0, 254.0], [258.0, 335.6666666666667], [303.0, 313.8999999999999], [302.0, 328.6666666666667], [300.0, 479.0], [298.0, 489.0], [295.0, 694.0], [301.0, 580.0], [297.0, 594.1758241758242], [306.0, 320.75], [305.0, 322.375], [304.0, 450.0], [308.0, 269.625], [309.0, 365.5], [310.0, 329.125], [311.0, 341.0], [307.0, 314.40000000000003], [314.0, 302.0], [315.0, 289.3333333333333], [319.0, 408.5], [313.0, 409.6], [312.0, 279.14285714285717], [316.0, 455.5], [318.0, 387.0], [317.0, 431.5], [333.0, 522.0], [320.0, 502.8], [322.0, 541.0], [327.0, 583.0], [326.0, 552.0], [324.0, 539.0], [323.0, 468.0], [335.0, 521.0], [332.0, 517.0], [331.0, 516.0], [330.0, 516.0], [329.0, 610.0], [328.0, 531.0], [349.0, 626.0], [351.0, 684.0], [340.0, 398.0], [341.0, 513.0], [343.0, 508.0], [337.0, 520.0], [336.0, 523.0], [342.0, 515.0], [338.0, 366.5], [344.0, 656.2], [350.0, 502.0], [348.0, 498.0], [339.0, 515.0], [347.0, 508.0], [346.0, 510.0], [366.0, 449.3333333333333], [367.0, 394.83333333333337], [365.0, 510.00000000000006], [364.0, 475.5], [363.0, 485.6666666666667], [362.0, 405.5], [360.0, 629.0], [361.0, 1173.0], [359.0, 472.4], [355.0, 432.0], [354.0, 930.0], [353.0, 567.0], [352.0, 639.0], [358.0, 457.3333333333333], [356.0, 721.7142857142857], [357.0, 601.5], [382.0, 438.0], [383.0, 631.6666666666666], [381.0, 446.42857142857144], [380.0, 386.8571428571429], [379.0, 423.6666666666667], [378.0, 385.25], [377.0, 405.5], [376.0, 383.6], [375.0, 469.20000000000005], [371.0, 530.1428571428571], [369.0, 442.16666666666663], [368.0, 522.6666666666666], [372.0, 519.6666666666666], [373.0, 469.0], [385.0, 418.0], [384.0, 564.5], [393.0, 436.5], [395.0, 438.0], [397.0, 431.5], [396.0, 440.0], [387.0, 451.0], [386.0, 452.0], [394.0, 438.0], [392.0, 444.0], [391.0, 443.0], [390.0, 446.0], [389.0, 444.0], [388.0, 444.0], [1.0, 2116.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[218.21799999999965, 453.2020000000003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 397.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2283.3333333333335, "minX": 1.69977882E12, "maxY": 206124.5, "series": [{"data": [[1.69977882E12, 206124.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69977882E12, 2283.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977882E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 453.2020000000003, "minX": 1.69977882E12, "maxY": 453.2020000000003, "series": [{"data": [[1.69977882E12, 453.2020000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977882E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 448.6629999999999, "minX": 1.69977882E12, "maxY": 448.6629999999999, "series": [{"data": [[1.69977882E12, 448.6629999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977882E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.699, "minX": 1.69977882E12, "maxY": 0.699, "series": [{"data": [[1.69977882E12, 0.699]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977882E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 18.0, "minX": 1.69977882E12, "maxY": 3002.0, "series": [{"data": [[1.69977882E12, 3002.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69977882E12, 712.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69977882E12, 1153.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69977882E12, 940.4999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69977882E12, 18.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69977882E12, 413.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977882E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 47.5, "minX": 44.0, "maxY": 954.0, "series": [{"data": [[68.0, 47.5], [44.0, 954.0], [411.0, 301.0], [477.0, 583.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 477.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 46.5, "minX": 44.0, "maxY": 953.0, "series": [{"data": [[68.0, 46.5], [44.0, 953.0], [411.0, 294.0], [477.0, 574.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 477.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.69977882E12, "maxY": 16.666666666666668, "series": [{"data": [[1.69977882E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977882E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.69977882E12, "maxY": 16.666666666666668, "series": [{"data": [[1.69977882E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977882E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.69977882E12, "maxY": 16.666666666666668, "series": [{"data": [[1.69977882E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977882E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.69977882E12, "maxY": 16.666666666666668, "series": [{"data": [[1.69977882E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977882E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

