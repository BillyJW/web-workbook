'use strict';

$(function() {
  var turn = 'X'
  $('[data-cell]').on('click', function(){
    if($(this).text() === ''){
      $(this).text(turn);
      checkWin();
      if(turn === 'X'){
        turn = 'O';
      }
    }else{
      turn = 'X';
    }
  })
  function checkWin(){
    if($('[data-cell]="0"').text() === turn &&
    $('d[ata-cell]="1"').text() === turn &&
    $('[data-cell]="2"').text() === turn{
      &('#announce-winner').text(`${turn} wins`);
    }
  }

  $('#clear').click(function(){
    $('{data-cell}').empty();
    turn = "X";
    $('#announce-winner').empty();
  })

})







// $(function() {
//   var turn = 'X'
//   $(function() {
//   $('[data-cell]').on('click', function(){
//     if($(this).text() === ''){
//       $(this).text(turn);
//       if(turn === 'X'){
//         turn = 'O';
//       }
//       // $(this).text('X');
//     }else{
//       turn = 'X';
//     }
//     limit(24);
//   });
//
//   function limit(target){
//     let total = 0;
//     $('[data-cell]').each(function(){
//      total += Number($(this).text());
//       console.log(total);
//     })
//     if(total === target){
//       $('#announce-winner').text(`HIT ${target}`);
//     }
//   }
// })
//
// });
