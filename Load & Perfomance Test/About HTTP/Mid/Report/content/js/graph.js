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
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 997.0, "series": [{"data": [[0.0, 15.0], [0.1, 16.0], [0.2, 18.0], [0.3, 18.0], [0.4, 27.0], [0.5, 27.0], [0.6, 27.0], [0.7, 29.0], [0.8, 29.0], [0.9, 30.0], [1.0, 31.0], [1.1, 32.0], [1.2, 33.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 35.0], [1.7, 35.0], [1.8, 36.0], [1.9, 40.0], [2.0, 43.0], [2.1, 44.0], [2.2, 45.0], [2.3, 46.0], [2.4, 46.0], [2.5, 47.0], [2.6, 47.0], [2.7, 48.0], [2.8, 49.0], [2.9, 50.0], [3.0, 50.0], [3.1, 50.0], [3.2, 52.0], [3.3, 53.0], [3.4, 53.0], [3.5, 53.0], [3.6, 54.0], [3.7, 55.0], [3.8, 56.0], [3.9, 56.0], [4.0, 57.0], [4.1, 57.0], [4.2, 57.0], [4.3, 58.0], [4.4, 60.0], [4.5, 60.0], [4.6, 61.0], [4.7, 61.0], [4.8, 62.0], [4.9, 63.0], [5.0, 63.0], [5.1, 64.0], [5.2, 65.0], [5.3, 65.0], [5.4, 67.0], [5.5, 67.0], [5.6, 67.0], [5.7, 69.0], [5.8, 69.0], [5.9, 69.0], [6.0, 70.0], [6.1, 70.0], [6.2, 70.0], [6.3, 70.0], [6.4, 71.0], [6.5, 72.0], [6.6, 73.0], [6.7, 73.0], [6.8, 74.0], [6.9, 74.0], [7.0, 74.0], [7.1, 74.0], [7.2, 75.0], [7.3, 76.0], [7.4, 76.0], [7.5, 77.0], [7.6, 78.0], [7.7, 78.0], [7.8, 80.0], [7.9, 81.0], [8.0, 83.0], [8.1, 85.0], [8.2, 86.0], [8.3, 88.0], [8.4, 89.0], [8.5, 90.0], [8.6, 92.0], [8.7, 92.0], [8.8, 94.0], [8.9, 96.0], [9.0, 97.0], [9.1, 98.0], [9.2, 98.0], [9.3, 99.0], [9.4, 100.0], [9.5, 102.0], [9.6, 102.0], [9.7, 105.0], [9.8, 105.0], [9.9, 105.0], [10.0, 107.0], [10.1, 107.0], [10.2, 107.0], [10.3, 108.0], [10.4, 108.0], [10.5, 110.0], [10.6, 110.0], [10.7, 110.0], [10.8, 110.0], [10.9, 110.0], [11.0, 111.0], [11.1, 112.0], [11.2, 113.0], [11.3, 113.0], [11.4, 113.0], [11.5, 114.0], [11.6, 114.0], [11.7, 115.0], [11.8, 115.0], [11.9, 116.0], [12.0, 116.0], [12.1, 116.0], [12.2, 116.0], [12.3, 120.0], [12.4, 120.0], [12.5, 122.0], [12.6, 122.0], [12.7, 124.0], [12.8, 125.0], [12.9, 125.0], [13.0, 125.0], [13.1, 126.0], [13.2, 126.0], [13.3, 126.0], [13.4, 127.0], [13.5, 129.0], [13.6, 129.0], [13.7, 131.0], [13.8, 133.0], [13.9, 134.0], [14.0, 134.0], [14.1, 134.0], [14.2, 135.0], [14.3, 137.0], [14.4, 137.0], [14.5, 137.0], [14.6, 139.0], [14.7, 140.0], [14.8, 141.0], [14.9, 141.0], [15.0, 141.0], [15.1, 142.0], [15.2, 142.0], [15.3, 142.0], [15.4, 143.0], [15.5, 143.0], [15.6, 143.0], [15.7, 144.0], [15.8, 144.0], [15.9, 144.0], [16.0, 145.0], [16.1, 148.0], [16.2, 148.0], [16.3, 149.0], [16.4, 149.0], [16.5, 150.0], [16.6, 151.0], [16.7, 151.0], [16.8, 151.0], [16.9, 151.0], [17.0, 152.0], [17.1, 152.0], [17.2, 153.0], [17.3, 153.0], [17.4, 153.0], [17.5, 154.0], [17.6, 154.0], [17.7, 155.0], [17.8, 157.0], [17.9, 158.0], [18.0, 158.0], [18.1, 159.0], [18.2, 161.0], [18.3, 162.0], [18.4, 165.0], [18.5, 166.0], [18.6, 167.0], [18.7, 167.0], [18.8, 168.0], [18.9, 168.0], [19.0, 169.0], [19.1, 170.0], [19.2, 171.0], [19.3, 172.0], [19.4, 172.0], [19.5, 172.0], [19.6, 172.0], [19.7, 173.0], [19.8, 175.0], [19.9, 175.0], [20.0, 175.0], [20.1, 177.0], [20.2, 178.0], [20.3, 178.0], [20.4, 178.0], [20.5, 181.0], [20.6, 181.0], [20.7, 181.0], [20.8, 182.0], [20.9, 182.0], [21.0, 183.0], [21.1, 185.0], [21.2, 185.0], [21.3, 189.0], [21.4, 190.0], [21.5, 193.0], [21.6, 194.0], [21.7, 195.0], [21.8, 195.0], [21.9, 195.0], [22.0, 197.0], [22.1, 197.0], [22.2, 200.0], [22.3, 200.0], [22.4, 201.0], [22.5, 201.0], [22.6, 201.0], [22.7, 202.0], [22.8, 203.0], [22.9, 204.0], [23.0, 204.0], [23.1, 204.0], [23.2, 204.0], [23.3, 211.0], [23.4, 213.0], [23.5, 215.0], [23.6, 218.0], [23.7, 219.0], [23.8, 219.0], [23.9, 220.0], [24.0, 221.0], [24.1, 221.0], [24.2, 226.0], [24.3, 226.0], [24.4, 226.0], [24.5, 227.0], [24.6, 227.0], [24.7, 232.0], [24.8, 234.0], [24.9, 235.0], [25.0, 235.0], [25.1, 236.0], [25.2, 237.0], [25.3, 240.0], [25.4, 242.0], [25.5, 243.0], [25.6, 243.0], [25.7, 245.0], [25.8, 248.0], [25.9, 249.0], [26.0, 250.0], [26.1, 250.0], [26.2, 252.0], [26.3, 252.0], [26.4, 253.0], [26.5, 254.0], [26.6, 254.0], [26.7, 254.0], [26.8, 255.0], [26.9, 256.0], [27.0, 256.0], [27.1, 257.0], [27.2, 258.0], [27.3, 259.0], [27.4, 259.0], [27.5, 260.0], [27.6, 261.0], [27.7, 263.0], [27.8, 265.0], [27.9, 272.0], [28.0, 272.0], [28.1, 272.0], [28.2, 273.0], [28.3, 274.0], [28.4, 274.0], [28.5, 275.0], [28.6, 276.0], [28.7, 276.0], [28.8, 276.0], [28.9, 277.0], [29.0, 279.0], [29.1, 281.0], [29.2, 282.0], [29.3, 283.0], [29.4, 283.0], [29.5, 284.0], [29.6, 286.0], [29.7, 286.0], [29.8, 287.0], [29.9, 288.0], [30.0, 289.0], [30.1, 289.0], [30.2, 291.0], [30.3, 294.0], [30.4, 295.0], [30.5, 295.0], [30.6, 297.0], [30.7, 298.0], [30.8, 298.0], [30.9, 298.0], [31.0, 299.0], [31.1, 299.0], [31.2, 299.0], [31.3, 300.0], [31.4, 303.0], [31.5, 303.0], [31.6, 307.0], [31.7, 307.0], [31.8, 312.0], [31.9, 313.0], [32.0, 313.0], [32.1, 313.0], [32.2, 314.0], [32.3, 314.0], [32.4, 314.0], [32.5, 316.0], [32.6, 316.0], [32.7, 317.0], [32.8, 318.0], [32.9, 318.0], [33.0, 318.0], [33.1, 319.0], [33.2, 319.0], [33.3, 319.0], [33.4, 319.0], [33.5, 320.0], [33.6, 320.0], [33.7, 321.0], [33.8, 321.0], [33.9, 321.0], [34.0, 322.0], [34.1, 322.0], [34.2, 322.0], [34.3, 323.0], [34.4, 323.0], [34.5, 326.0], [34.6, 327.0], [34.7, 328.0], [34.8, 328.0], [34.9, 330.0], [35.0, 330.0], [35.1, 330.0], [35.2, 331.0], [35.3, 331.0], [35.4, 332.0], [35.5, 334.0], [35.6, 335.0], [35.7, 336.0], [35.8, 337.0], [35.9, 337.0], [36.0, 337.0], [36.1, 339.0], [36.2, 342.0], [36.3, 342.0], [36.4, 344.0], [36.5, 344.0], [36.6, 344.0], [36.7, 344.0], [36.8, 346.0], [36.9, 347.0], [37.0, 347.0], [37.1, 348.0], [37.2, 348.0], [37.3, 348.0], [37.4, 348.0], [37.5, 349.0], [37.6, 349.0], [37.7, 350.0], [37.8, 350.0], [37.9, 351.0], [38.0, 351.0], [38.1, 354.0], [38.2, 354.0], [38.3, 354.0], [38.4, 355.0], [38.5, 355.0], [38.6, 356.0], [38.7, 356.0], [38.8, 357.0], [38.9, 357.0], [39.0, 358.0], [39.1, 359.0], [39.2, 361.0], [39.3, 361.0], [39.4, 363.0], [39.5, 363.0], [39.6, 365.0], [39.7, 366.0], [39.8, 366.0], [39.9, 367.0], [40.0, 367.0], [40.1, 368.0], [40.2, 368.0], [40.3, 369.0], [40.4, 369.0], [40.5, 369.0], [40.6, 371.0], [40.7, 371.0], [40.8, 371.0], [40.9, 371.0], [41.0, 372.0], [41.1, 372.0], [41.2, 372.0], [41.3, 372.0], [41.4, 373.0], [41.5, 373.0], [41.6, 374.0], [41.7, 375.0], [41.8, 376.0], [41.9, 377.0], [42.0, 377.0], [42.1, 380.0], [42.2, 380.0], [42.3, 384.0], [42.4, 385.0], [42.5, 386.0], [42.6, 386.0], [42.7, 387.0], [42.8, 387.0], [42.9, 387.0], [43.0, 387.0], [43.1, 388.0], [43.2, 389.0], [43.3, 392.0], [43.4, 394.0], [43.5, 395.0], [43.6, 395.0], [43.7, 397.0], [43.8, 398.0], [43.9, 399.0], [44.0, 400.0], [44.1, 400.0], [44.2, 401.0], [44.3, 401.0], [44.4, 402.0], [44.5, 403.0], [44.6, 404.0], [44.7, 405.0], [44.8, 413.0], [44.9, 413.0], [45.0, 413.0], [45.1, 418.0], [45.2, 421.0], [45.3, 421.0], [45.4, 421.0], [45.5, 422.0], [45.6, 428.0], [45.7, 429.0], [45.8, 429.0], [45.9, 430.0], [46.0, 431.0], [46.1, 431.0], [46.2, 433.0], [46.3, 433.0], [46.4, 434.0], [46.5, 439.0], [46.6, 440.0], [46.7, 441.0], [46.8, 441.0], [46.9, 442.0], [47.0, 444.0], [47.1, 444.0], [47.2, 444.0], [47.3, 445.0], [47.4, 447.0], [47.5, 448.0], [47.6, 450.0], [47.7, 450.0], [47.8, 452.0], [47.9, 453.0], [48.0, 458.0], [48.1, 459.0], [48.2, 460.0], [48.3, 461.0], [48.4, 463.0], [48.5, 463.0], [48.6, 465.0], [48.7, 465.0], [48.8, 469.0], [48.9, 470.0], [49.0, 471.0], [49.1, 472.0], [49.2, 472.0], [49.3, 473.0], [49.4, 474.0], [49.5, 474.0], [49.6, 476.0], [49.7, 480.0], [49.8, 480.0], [49.9, 481.0], [50.0, 482.0], [50.1, 483.0], [50.2, 483.0], [50.3, 484.0], [50.4, 485.0], [50.5, 485.0], [50.6, 487.0], [50.7, 488.0], [50.8, 490.0], [50.9, 491.0], [51.0, 491.0], [51.1, 492.0], [51.2, 492.0], [51.3, 492.0], [51.4, 492.0], [51.5, 494.0], [51.6, 494.0], [51.7, 494.0], [51.8, 498.0], [51.9, 501.0], [52.0, 504.0], [52.1, 505.0], [52.2, 508.0], [52.3, 510.0], [52.4, 511.0], [52.5, 512.0], [52.6, 513.0], [52.7, 515.0], [52.8, 516.0], [52.9, 517.0], [53.0, 519.0], [53.1, 519.0], [53.2, 520.0], [53.3, 520.0], [53.4, 521.0], [53.5, 521.0], [53.6, 521.0], [53.7, 522.0], [53.8, 522.0], [53.9, 522.0], [54.0, 523.0], [54.1, 523.0], [54.2, 523.0], [54.3, 524.0], [54.4, 525.0], [54.5, 525.0], [54.6, 526.0], [54.7, 527.0], [54.8, 528.0], [54.9, 529.0], [55.0, 529.0], [55.1, 530.0], [55.2, 533.0], [55.3, 533.0], [55.4, 534.0], [55.5, 534.0], [55.6, 536.0], [55.7, 536.0], [55.8, 537.0], [55.9, 537.0], [56.0, 537.0], [56.1, 538.0], [56.2, 538.0], [56.3, 539.0], [56.4, 539.0], [56.5, 539.0], [56.6, 541.0], [56.7, 541.0], [56.8, 541.0], [56.9, 541.0], [57.0, 543.0], [57.1, 544.0], [57.2, 546.0], [57.3, 547.0], [57.4, 547.0], [57.5, 549.0], [57.6, 550.0], [57.7, 550.0], [57.8, 550.0], [57.9, 551.0], [58.0, 553.0], [58.1, 555.0], [58.2, 555.0], [58.3, 555.0], [58.4, 555.0], [58.5, 557.0], [58.6, 558.0], [58.7, 558.0], [58.8, 559.0], [58.9, 559.0], [59.0, 560.0], [59.1, 560.0], [59.2, 560.0], [59.3, 562.0], [59.4, 562.0], [59.5, 563.0], [59.6, 567.0], [59.7, 568.0], [59.8, 570.0], [59.9, 570.0], [60.0, 571.0], [60.1, 572.0], [60.2, 574.0], [60.3, 574.0], [60.4, 576.0], [60.5, 578.0], [60.6, 579.0], [60.7, 579.0], [60.8, 579.0], [60.9, 580.0], [61.0, 581.0], [61.1, 582.0], [61.2, 582.0], [61.3, 585.0], [61.4, 585.0], [61.5, 586.0], [61.6, 589.0], [61.7, 592.0], [61.8, 593.0], [61.9, 593.0], [62.0, 596.0], [62.1, 596.0], [62.2, 599.0], [62.3, 600.0], [62.4, 601.0], [62.5, 601.0], [62.6, 601.0], [62.7, 601.0], [62.8, 603.0], [62.9, 603.0], [63.0, 605.0], [63.1, 608.0], [63.2, 609.0], [63.3, 609.0], [63.4, 612.0], [63.5, 613.0], [63.6, 613.0], [63.7, 614.0], [63.8, 614.0], [63.9, 615.0], [64.0, 616.0], [64.1, 617.0], [64.2, 618.0], [64.3, 619.0], [64.4, 619.0], [64.5, 620.0], [64.6, 621.0], [64.7, 621.0], [64.8, 623.0], [64.9, 623.0], [65.0, 623.0], [65.1, 624.0], [65.2, 624.0], [65.3, 625.0], [65.4, 626.0], [65.5, 626.0], [65.6, 626.0], [65.7, 627.0], [65.8, 627.0], [65.9, 628.0], [66.0, 629.0], [66.1, 629.0], [66.2, 629.0], [66.3, 629.0], [66.4, 630.0], [66.5, 630.0], [66.6, 633.0], [66.7, 634.0], [66.8, 634.0], [66.9, 635.0], [67.0, 637.0], [67.1, 637.0], [67.2, 640.0], [67.3, 641.0], [67.4, 642.0], [67.5, 642.0], [67.6, 642.0], [67.7, 642.0], [67.8, 642.0], [67.9, 643.0], [68.0, 644.0], [68.1, 647.0], [68.2, 648.0], [68.3, 648.0], [68.4, 649.0], [68.5, 650.0], [68.6, 650.0], [68.7, 652.0], [68.8, 654.0], [68.9, 654.0], [69.0, 655.0], [69.1, 655.0], [69.2, 656.0], [69.3, 656.0], [69.4, 656.0], [69.5, 656.0], [69.6, 657.0], [69.7, 657.0], [69.8, 658.0], [69.9, 659.0], [70.0, 661.0], [70.1, 662.0], [70.2, 662.0], [70.3, 662.0], [70.4, 663.0], [70.5, 663.0], [70.6, 668.0], [70.7, 671.0], [70.8, 672.0], [70.9, 673.0], [71.0, 673.0], [71.1, 673.0], [71.2, 674.0], [71.3, 675.0], [71.4, 676.0], [71.5, 677.0], [71.6, 680.0], [71.7, 681.0], [71.8, 681.0], [71.9, 684.0], [72.0, 686.0], [72.1, 689.0], [72.2, 689.0], [72.3, 689.0], [72.4, 690.0], [72.5, 692.0], [72.6, 693.0], [72.7, 693.0], [72.8, 694.0], [72.9, 695.0], [73.0, 695.0], [73.1, 695.0], [73.2, 697.0], [73.3, 698.0], [73.4, 702.0], [73.5, 704.0], [73.6, 705.0], [73.7, 706.0], [73.8, 707.0], [73.9, 708.0], [74.0, 708.0], [74.1, 709.0], [74.2, 709.0], [74.3, 709.0], [74.4, 709.0], [74.5, 711.0], [74.6, 711.0], [74.7, 711.0], [74.8, 711.0], [74.9, 711.0], [75.0, 712.0], [75.1, 714.0], [75.2, 714.0], [75.3, 717.0], [75.4, 719.0], [75.5, 719.0], [75.6, 722.0], [75.7, 723.0], [75.8, 724.0], [75.9, 727.0], [76.0, 727.0], [76.1, 730.0], [76.2, 731.0], [76.3, 732.0], [76.4, 736.0], [76.5, 736.0], [76.6, 736.0], [76.7, 737.0], [76.8, 739.0], [76.9, 739.0], [77.0, 740.0], [77.1, 742.0], [77.2, 742.0], [77.3, 744.0], [77.4, 744.0], [77.5, 744.0], [77.6, 746.0], [77.7, 746.0], [77.8, 746.0], [77.9, 746.0], [78.0, 747.0], [78.1, 748.0], [78.2, 750.0], [78.3, 750.0], [78.4, 752.0], [78.5, 753.0], [78.6, 759.0], [78.7, 759.0], [78.8, 760.0], [78.9, 761.0], [79.0, 761.0], [79.1, 761.0], [79.2, 762.0], [79.3, 763.0], [79.4, 764.0], [79.5, 765.0], [79.6, 766.0], [79.7, 767.0], [79.8, 771.0], [79.9, 772.0], [80.0, 773.0], [80.1, 775.0], [80.2, 775.0], [80.3, 776.0], [80.4, 776.0], [80.5, 776.0], [80.6, 780.0], [80.7, 780.0], [80.8, 780.0], [80.9, 782.0], [81.0, 783.0], [81.1, 784.0], [81.2, 784.0], [81.3, 785.0], [81.4, 785.0], [81.5, 785.0], [81.6, 786.0], [81.7, 786.0], [81.8, 786.0], [81.9, 788.0], [82.0, 789.0], [82.1, 790.0], [82.2, 792.0], [82.3, 795.0], [82.4, 797.0], [82.5, 797.0], [82.6, 797.0], [82.7, 799.0], [82.8, 800.0], [82.9, 800.0], [83.0, 801.0], [83.1, 801.0], [83.2, 803.0], [83.3, 804.0], [83.4, 805.0], [83.5, 807.0], [83.6, 807.0], [83.7, 808.0], [83.8, 809.0], [83.9, 809.0], [84.0, 811.0], [84.1, 811.0], [84.2, 816.0], [84.3, 822.0], [84.4, 826.0], [84.5, 827.0], [84.6, 828.0], [84.7, 830.0], [84.8, 831.0], [84.9, 831.0], [85.0, 832.0], [85.1, 833.0], [85.2, 834.0], [85.3, 836.0], [85.4, 837.0], [85.5, 839.0], [85.6, 839.0], [85.7, 839.0], [85.8, 840.0], [85.9, 842.0], [86.0, 843.0], [86.1, 843.0], [86.2, 844.0], [86.3, 844.0], [86.4, 844.0], [86.5, 845.0], [86.6, 845.0], [86.7, 845.0], [86.8, 845.0], [86.9, 846.0], [87.0, 847.0], [87.1, 848.0], [87.2, 848.0], [87.3, 848.0], [87.4, 849.0], [87.5, 849.0], [87.6, 850.0], [87.7, 852.0], [87.8, 853.0], [87.9, 854.0], [88.0, 854.0], [88.1, 854.0], [88.2, 854.0], [88.3, 854.0], [88.4, 855.0], [88.5, 855.0], [88.6, 856.0], [88.7, 858.0], [88.8, 858.0], [88.9, 863.0], [89.0, 863.0], [89.1, 864.0], [89.2, 865.0], [89.3, 865.0], [89.4, 866.0], [89.5, 866.0], [89.6, 867.0], [89.7, 867.0], [89.8, 867.0], [89.9, 867.0], [90.0, 869.0], [90.1, 870.0], [90.2, 870.0], [90.3, 871.0], [90.4, 872.0], [90.5, 872.0], [90.6, 872.0], [90.7, 872.0], [90.8, 874.0], [90.9, 874.0], [91.0, 874.0], [91.1, 874.0], [91.2, 874.0], [91.3, 875.0], [91.4, 875.0], [91.5, 875.0], [91.6, 875.0], [91.7, 875.0], [91.8, 876.0], [91.9, 877.0], [92.0, 877.0], [92.1, 877.0], [92.2, 878.0], [92.3, 878.0], [92.4, 878.0], [92.5, 878.0], [92.6, 879.0], [92.7, 879.0], [92.8, 879.0], [92.9, 879.0], [93.0, 879.0], [93.1, 880.0], [93.2, 880.0], [93.3, 881.0], [93.4, 881.0], [93.5, 881.0], [93.6, 881.0], [93.7, 881.0], [93.8, 882.0], [93.9, 883.0], [94.0, 883.0], [94.1, 884.0], [94.2, 884.0], [94.3, 884.0], [94.4, 884.0], [94.5, 884.0], [94.6, 884.0], [94.7, 885.0], [94.8, 885.0], [94.9, 885.0], [95.0, 885.0], [95.1, 885.0], [95.2, 886.0], [95.3, 887.0], [95.4, 887.0], [95.5, 889.0], [95.6, 889.0], [95.7, 890.0], [95.8, 890.0], [95.9, 891.0], [96.0, 891.0], [96.1, 892.0], [96.2, 892.0], [96.3, 894.0], [96.4, 894.0], [96.5, 894.0], [96.6, 894.0], [96.7, 898.0], [96.8, 899.0], [96.9, 899.0], [97.0, 900.0], [97.1, 900.0], [97.2, 901.0], [97.3, 901.0], [97.4, 901.0], [97.5, 901.0], [97.6, 902.0], [97.7, 903.0], [97.8, 903.0], [97.9, 904.0], [98.0, 907.0], [98.1, 907.0], [98.2, 911.0], [98.3, 913.0], [98.4, 914.0], [98.5, 921.0], [98.6, 926.0], [98.7, 927.0], [98.8, 928.0], [98.9, 929.0], [99.0, 931.0], [99.1, 936.0], [99.2, 936.0], [99.3, 937.0], [99.4, 942.0], [99.5, 953.0], [99.6, 959.0], [99.7, 965.0], [99.8, 967.0], [99.9, 997.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 142.0, "series": [{"data": [[0.0, 94.0], [300.0, 127.0], [600.0, 111.0], [700.0, 95.0], [100.0, 127.0], [200.0, 91.0], [400.0, 79.0], [800.0, 142.0], [900.0, 30.0], [500.0, 104.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 482.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 518.0, "series": [{"data": [[0.0, 518.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 482.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 252.44700000000034, "minX": 1.69977846E12, "maxY": 252.44700000000034, "series": [{"data": [[1.69977846E12, 252.44700000000034]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977846E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.0, "maxY": 936.0, "series": [{"data": [[2.0, 32.0], [10.0, 27.0], [14.0, 400.0], [15.0, 377.0], [16.0, 347.6923076923077], [18.0, 141.66666666666669], [20.0, 34.333333333333336], [21.0, 201.5], [22.0, 289.5], [23.0, 37.8], [24.0, 40.666666666666664], [25.0, 42.0], [26.0, 126.125], [27.0, 132.25], [28.0, 42.0], [29.0, 208.0], [31.0, 359.0], [33.0, 348.0], [32.0, 366.0], [35.0, 354.0], [37.0, 339.0], [38.0, 56.0], [39.0, 195.75], [40.0, 202.25], [41.0, 188.5], [42.0, 201.0], [46.0, 196.25], [47.0, 343.0], [49.0, 313.0], [51.0, 322.0], [53.0, 306.0], [52.0, 318.3333333333333], [54.0, 77.5], [59.0, 47.0], [63.0, 295.90000000000003], [62.0, 323.0], [67.0, 195.0], [66.0, 172.0], [65.0, 320.0], [64.0, 170.0], [71.0, 96.66666666666666], [70.0, 134.0], [68.0, 158.0], [69.0, 67.0], [72.0, 103.0], [74.0, 193.0], [73.0, 153.0], [75.0, 60.5], [79.0, 129.0], [78.0, 156.0], [76.0, 154.5], [80.0, 107.0], [82.0, 96.25], [83.0, 143.0], [81.0, 111.5], [84.0, 133.5], [85.0, 107.5], [90.0, 143.0], [89.0, 109.0], [88.0, 115.2], [94.0, 102.0], [95.0, 221.0], [93.0, 137.0], [92.0, 134.5], [96.0, 107.33333333333334], [97.0, 111.75], [99.0, 129.5], [102.0, 80.0], [103.0, 134.75], [101.0, 127.0], [100.0, 137.0], [104.0, 97.0], [106.0, 117.0], [107.0, 85.5], [105.0, 139.0], [109.0, 349.0], [111.0, 624.6666666666666], [110.0, 115.0], [108.0, 875.3577981651376], [115.0, 360.6666666666667], [114.0, 373.6666666666667], [112.0, 536.0], [113.0, 936.0], [116.0, 265.0], [119.0, 487.0], [118.0, 537.0], [117.0, 358.33333333333337], [120.0, 373.3333333333333], [121.0, 348.0], [122.0, 486.0], [123.0, 877.0], [126.0, 107.0], [127.0, 485.0], [125.0, 889.0], [124.0, 800.0], [135.0, 418.0], [134.0, 197.33333333333331], [131.0, 654.75], [130.0, 133.0], [129.0, 106.0], [128.0, 473.0], [132.0, 489.5], [133.0, 119.5], [138.0, 116.0], [143.0, 876.0], [142.0, 780.0], [141.0, 773.0], [140.0, 784.6666666666666], [137.0, 843.0], [136.0, 900.0], [145.0, 589.6666666666666], [151.0, 767.0], [150.0, 838.0], [148.0, 775.0], [147.0, 809.0], [146.0, 786.0], [155.0, 457.0], [159.0, 826.0], [158.0, 855.0], [157.0, 866.0], [156.0, 804.0], [154.0, 886.0], [153.0, 774.0], [167.0, 790.0], [166.0, 780.0], [165.0, 765.0], [164.0, 864.0], [163.0, 821.0], [161.0, 760.0], [160.0, 853.0], [173.0, 513.5], [175.0, 487.75], [172.0, 858.0], [171.0, 764.0], [170.0, 762.0], [169.0, 797.0], [168.0, 831.0], [179.0, 279.6], [177.0, 242.33333333333331], [178.0, 306.0], [183.0, 294.4], [182.0, 495.0], [181.0, 785.0], [180.0, 731.0], [176.0, 771.0], [191.0, 748.0], [190.0, 782.0], [188.0, 753.0], [187.0, 865.0], [186.0, 828.0], [185.0, 761.0], [184.0, 789.0], [194.0, 401.0], [193.0, 561.0], [197.0, 500.0], [196.0, 348.66666666666663], [195.0, 379.0], [198.0, 363.0], [199.0, 854.0], [202.0, 439.0], [207.0, 194.5], [206.0, 744.5], [204.0, 737.0], [203.0, 705.0], [201.0, 730.0], [200.0, 840.0], [212.0, 411.33333333333337], [214.0, 338.5], [215.0, 403.0], [213.0, 744.0], [211.0, 759.0], [210.0, 732.0], [209.0, 761.0], [208.0, 768.0], [218.0, 484.5], [221.0, 780.0], [220.0, 786.5], [217.0, 801.0], [216.0, 811.0], [227.0, 406.0], [228.0, 392.0], [230.0, 203.0], [231.0, 763.5], [229.0, 808.0], [226.0, 740.0], [225.0, 717.0], [224.0, 784.0], [232.0, 460.5], [236.0, 195.0], [239.0, 379.0], [238.0, 816.0], [237.0, 770.0], [235.0, 746.0], [234.0, 763.0], [233.0, 736.0], [240.0, 201.0], [246.0, 210.2], [245.0, 728.0], [243.0, 711.0], [242.0, 759.0], [241.0, 768.5], [254.0, 458.5], [255.0, 724.0], [253.0, 707.0], [252.0, 697.5], [250.0, 711.0], [249.0, 724.3333333333334], [248.0, 744.0], [259.0, 711.0], [262.0, 462.0], [260.0, 341.25], [264.0, 219.33333333333334], [266.0, 457.0], [268.0, 690.0], [267.0, 689.0], [265.0, 692.0], [263.0, 695.0], [256.0, 709.0], [258.0, 711.0], [257.0, 709.0], [261.0, 702.0], [276.0, 236.33333333333334], [279.0, 232.0], [281.0, 240.0], [282.0, 234.0], [283.0, 236.0], [285.0, 241.5], [284.0, 235.0], [286.0, 240.0], [292.0, 242.5], [294.0, 250.0], [298.0, 254.0], [299.0, 250.0], [301.0, 252.0], [302.0, 259.0], [303.0, 254.75], [304.0, 265.0], [308.0, 270.6666666666667], [309.0, 257.0], [314.0, 263.0], [317.0, 307.0], [319.0, 273.0], [320.0, 272.0], [334.0, 305.3333333333333], [331.0, 276.3333333333333], [326.0, 273.0], [322.0, 272.0], [321.0, 274.0], [347.0, 283.0], [345.0, 283.0], [343.0, 281.0], [336.0, 279.0], [361.0, 282.0], [360.0, 298.0], [356.0, 287.0], [355.0, 284.0], [352.0, 286.0], [376.0, 293.0], [381.0, 298.0], [379.0, 299.0], [378.0, 288.5], [377.0, 303.0], [375.0, 321.0], [374.0, 301.0], [371.0, 286.0], [370.0, 371.0], [368.0, 289.0], [392.0, 299.5], [391.0, 308.0], [388.0, 297.0], [386.0, 351.5], [414.0, 356.0], [412.0, 405.0], [411.0, 316.0], [413.0, 314.0], [408.0, 307.5], [410.0, 354.0], [418.0, 618.3529411764705], [425.0, 428.0], [424.0, 538.0], [427.0, 585.0], [426.0, 546.0], [423.0, 420.5], [421.0, 416.0], [420.0, 592.0], [417.0, 317.0], [422.0, 463.0], [428.0, 434.0], [419.0, 578.0], [431.0, 549.0], [430.0, 582.0], [429.0, 586.0], [444.0, 395.0], [440.0, 320.0], [443.0, 337.0], [433.0, 403.3333333333333], [432.0, 559.0], [434.0, 539.0], [439.0, 523.0], [438.0, 542.0], [437.0, 378.5], [436.0, 441.0], [442.0, 477.3333333333333], [441.0, 460.5], [447.0, 387.0], [446.0, 547.0], [450.0, 427.0], [463.0, 397.25], [459.0, 450.5], [458.0, 570.0], [457.0, 508.0], [456.0, 522.0], [455.0, 379.5], [452.0, 424.0], [454.0, 535.0], [448.0, 462.5], [451.0, 429.3333333333333], [460.0, 553.0], [449.0, 431.6666666666667], [462.0, 460.0], [461.0, 520.0], [479.0, 521.0], [473.0, 388.25], [476.0, 441.5], [474.0, 451.5], [475.0, 539.0], [472.0, 408.5], [467.0, 433.0], [466.0, 424.0], [469.0, 464.0], [468.0, 538.0], [471.0, 550.0], [465.0, 550.0], [464.0, 544.0], [470.0, 550.0], [478.0, 501.0], [477.0, 529.0], [492.0, 487.5], [494.0, 413.0], [493.0, 427.0], [495.0, 475.0], [490.0, 482.0], [488.0, 494.0], [487.0, 512.0], [480.0, 492.0], [483.0, 530.0], [482.0, 489.5], [486.0, 490.0], [485.0, 517.0], [484.0, 480.0], [496.0, 445.5], [503.0, 452.0], [504.0, 428.0], [505.0, 451.6666666666667], [509.0, 437.0], [499.0, 463.0], [498.0, 471.5], [510.0, 450.5], [511.0, 436.0], [507.0, 468.0], [502.0, 491.0], [501.0, 465.0], [500.0, 483.0], [514.0, 445.5], [513.0, 466.0], [512.0, 444.0], [515.0, 464.6666666666667], [517.0, 450.0], [516.0, 441.0], [519.0, 488.5], [518.0, 473.0], [522.0, 463.0], [521.0, 434.0], [520.0, 464.3333333333333], [524.0, 448.0], [523.0, 461.0], [1.0, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[252.44700000000034, 476.994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 524.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2250.0, "minX": 1.69977846E12, "maxY": 208250.0, "series": [{"data": [[1.69977846E12, 208250.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69977846E12, 2250.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977846E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 476.994, "minX": 1.69977846E12, "maxY": 476.994, "series": [{"data": [[1.69977846E12, 476.994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977846E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 473.13799999999947, "minX": 1.69977846E12, "maxY": 473.13799999999947, "series": [{"data": [[1.69977846E12, 473.13799999999947]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977846E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5029999999999998, "minX": 1.69977846E12, "maxY": 0.5029999999999998, "series": [{"data": [[1.69977846E12, 0.5029999999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977846E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 15.0, "minX": 1.69977846E12, "maxY": 997.0, "series": [{"data": [[1.69977846E12, 997.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69977846E12, 868.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69977846E12, 930.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69977846E12, 885.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69977846E12, 15.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69977846E12, 482.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977846E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 74.0, "minX": 101.0, "maxY": 689.5, "series": [{"data": [[554.0, 689.5], [345.0, 259.0], [101.0, 74.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 554.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 73.0, "minX": 101.0, "maxY": 680.0, "series": [{"data": [[554.0, 680.0], [345.0, 256.0], [101.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 554.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.69977846E12, "maxY": 16.666666666666668, "series": [{"data": [[1.69977846E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977846E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.69977846E12, "maxY": 16.666666666666668, "series": [{"data": [[1.69977846E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69977846E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.69977846E12, "maxY": 16.666666666666668, "series": [{"data": [[1.69977846E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977846E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.69977846E12, "maxY": 16.666666666666668, "series": [{"data": [[1.69977846E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69977846E12, "title": "Total Transactions Per Second"}},
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

