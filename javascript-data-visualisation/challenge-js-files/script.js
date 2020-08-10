// graph 1 

// def variable canvas,table
document.getElementById("table1").insertAdjacentHTML("beforebegin", '<canvas id="canvas1" height="400" width="400"></canvas>');
let canvas1 = document.getElementById ("canvas1");
let table = document.getElementById("table1");
// fonction table
function tableToJson(table) {
    let data = [];
    for (i = 1; i < table.rows.length; i++) {
        let tableRow = table.rows[i];
        let rowData = [];
        for (j = 1; j < tableRow.cells.length; j++) {
            rowData.push(tableRow.cells[j].innerHTML);;
        }
        data.push(rowData);
    }
    return data;
}

table = tableToJson(table);
console.log(table);
// function array to string + remplace "," par "."
function FloatIndex(table) {
    let data = [];
    for (i = 0; i < table.length; i++) {
        table[i] = table[i].replace(',', '.');
        data.push(parseFloat(table[i]));
    }
    return data
  }
// fonction random color
  function Rcolor (){

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return  'rgb(' + red + ',' + green + ',' + blue + ')' ;
  

};

console.log(Rcolor)
// function supprimer index axe y 
const arrayWithoutElementAtIndex = function (arr, index) {
    let ret = arr.slice(); //make a copy
    ret.splice(index, 1); //remove the item from given index
    return ret;
}
new Chart(document.getElementById("canvas1"), {
    
    type: 'line',
    data: {
      labels: table[0],
      datasets: [{ 
        data: FloatIndex(arrayWithoutElementAtIndex(table[1], 0)),
        label: table[1][0],
        borderColor: Rcolor(),
        fill: false
      },
       {
        data: FloatIndex(arrayWithoutElementAtIndex(table[2], 0)),
        label: table[2][0],
        borderColor: Rcolor(),
        fill: false
        }, { 
          data: FloatIndex(arrayWithoutElementAtIndex(table[3], 0)),
        label: table[3][0],
        borderColor: Rcolor(),
        fill: false
      },
       {
        data: FloatIndex(arrayWithoutElementAtIndex(table[4], 0)),
        label: table[4][0],
        borderColor: Rcolor(),
        fill: false
        }, { 
          data: FloatIndex(arrayWithoutElementAtIndex(table[5], 0)),
        label: table[5][0],
        borderColor: Rcolor(),
        fill: false
      },
       {
        data: FloatIndex(arrayWithoutElementAtIndex(table[6], 0)),
        label: table[6][0],
        borderColor: Rcolor(),
        fill: false
        }, { 
          data: FloatIndex(arrayWithoutElementAtIndex(table[7], 0)),
        label: table[7][0],
        borderColor: Rcolor(),
        fill: false
      },
       {
        data: FloatIndex(arrayWithoutElementAtIndex(table[8], 0)),
        label: table[8][0],
        borderColor: Rcolor(),
        fill: false
        }, { 
          data: FloatIndex(arrayWithoutElementAtIndex(table[9], 0)),
        label: table[9][0],
        borderColor: Rcolor(),
        fill: false
      },
       {
        data: FloatIndex(arrayWithoutElementAtIndex(table[10], 0)),
        label: table[10][0],
        borderColor: Rcolor(),
        fill: false
        }, { 
          data: FloatIndex(arrayWithoutElementAtIndex(table[11], 0)),
        label: table[11][0],
        borderColor: Rcolor(),
        fill: false
      },
       {
        data: FloatIndex(arrayWithoutElementAtIndex(table[12], 0)),
        label: table[12][0],
        borderColor: Rcolor(),
        fill: false
        }, { 
          data: FloatIndex(arrayWithoutElementAtIndex(table[13], 0)),
        label: table[13][0],
        borderColor: Rcolor(),
        fill: false
      }, {
        data: FloatIndex(arrayWithoutElementAtIndex(table[14], 0)),
        label: table[14][0],
        borderColor: Rcolor(),
        fill: false
        }, { 
          data: FloatIndex(arrayWithoutElementAtIndex(table[15], 0)),
        label: table[15][0],
        borderColor: Rcolor(),
        fill: false
      },
       {
        data: FloatIndex(arrayWithoutElementAtIndex(table[16], 0)),
        label: table[16][0],
        borderColor: Rcolor(),
        fill: false
        }, { 

          data: FloatIndex(arrayWithoutElementAtIndex(table[17], 0)),
          label: table[17][0],
          borderColor: Rcolor(),
          fill: false
        },
         {
          data: FloatIndex(arrayWithoutElementAtIndex(table[18], 0)),
          label: table[18][0],
          borderColor: Rcolor(),
          fill: false
          }, { 
            data: FloatIndex(arrayWithoutElementAtIndex(table[19], 0)),
          label: table[19][0],
          borderColor: Rcolor(),
          fill: false
        },
         {
          data: FloatIndex(arrayWithoutElementAtIndex(table[20], 0)),
          label: table[20][0],
          borderColor: Rcolor(),
          fill: false
          }, { 
            data: FloatIndex(arrayWithoutElementAtIndex(table[21], 0)),
          label: table[21][0],
          borderColor: Rcolor(),
          fill: false
        },
         {
          data: FloatIndex(arrayWithoutElementAtIndex(table[22], 0)),
          label: table[22][0],
          borderColor: Rcolor(),
          fill: false
          }, { 
            data: FloatIndex(arrayWithoutElementAtIndex(table[23], 0)),
          label: table[23][0],
          borderColor: Rcolor(),
          fill: false
        },
         {
          data: FloatIndex(arrayWithoutElementAtIndex(table[24], 0)),
          label: table[24][0],
          borderColor: Rcolor(),
          fill: false
          }, { 
            data: FloatIndex(arrayWithoutElementAtIndex(table[25], 0)),
          label: table[25][0],
          borderColor: Rcolor(),
          fill: false
        },
         {
          data: FloatIndex(arrayWithoutElementAtIndex(table[26], 0)),
          label: table[26][0],
          borderColor: Rcolor(),
          fill: false
          }, { 
            data: FloatIndex(arrayWithoutElementAtIndex(table[27], 0)),
          label: table[27][0],
          borderColor: Rcolor(),
          fill: false
        },
         {
          data: FloatIndex(arrayWithoutElementAtIndex(table[28], 0)),
          label: table[28][0],
          borderColor: Rcolor(),
          fill: false
          }, { 
            data: FloatIndex(arrayWithoutElementAtIndex(table[29], 0)),
          label: table[29][0],
          borderColor: Rcolor(),
          fill: false
        }, {
          data: FloatIndex(arrayWithoutElementAtIndex(table[30], 0)),
          label: table[30][0],
          borderColor: Rcolor(),
          fill: false
          }, { 
            data: FloatIndex(arrayWithoutElementAtIndex(table[31], 0)),
          label: table[31][0],
          borderColor: Rcolor(),
          fill: false
        },
         {
          data: FloatIndex(arrayWithoutElementAtIndex(table[32], 0)),
          label: table[32][0],
          borderColor: Rcolor(),
          fill: false
          }, { 
            data: FloatIndex(arrayWithoutElementAtIndex(table[33], 0)),
            label: table[33][0],
            borderColor: Rcolor(),
            fill: false
          }, {
            data: FloatIndex(arrayWithoutElementAtIndex(table[34], 0)),
            label: table[34][0],
            borderColor: Rcolor(),
            fill: false
            }, { 
              data: FloatIndex(arrayWithoutElementAtIndex(table[35], 0)),
            label: table[35][0],
            borderColor: Rcolor(),
            fill: false
          },
           
        
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Crimes recorded by the police'
      }
    }
  });



  //graph 2 



  document.getElementById("table2").insertAdjacentHTML("beforebegin",'<canvas id="canvas2" width="800" height="450"></canvas>');
  let canvas2 = document.getElementById ("canvas2");
  let tablew = document.getElementById("table2");
  tablew = tableToJson(tablew);
console.log(tablew)  
  


  new Chart(document.getElementById("canvas2"), {
    type: 'bar',
    data: {
      labels: pays (tablew),
      datasets: [
        {
          label: "Africa",
          backgroundColor: Rcolor,
          data: donne1(tablew)
        }, {
          label: "Europe",
          backgroundColor: Rcolor,
          data: donne2(tablew)
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Prison population'
      }
    }
});


function pays (arr) {
  let data = [];
    for(i=0;i<arr.length;i++){
      data[i]=arr[i][0];
    }
  data[7] = "England and Wales(UK)"
  return data ;
  }
  
  function donne1 (arr) {
  let data = []
    for(i=0;i<arr.length;i++) {
      data[i]=arr[i][1];
    }
    return data ;
  }
  
  function donne2 (arr) {
  let data = []
    for(i=0;i<arr.length;i++) {
      data[i]=arr[i][2];
    }
    return data ;
  }