import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Journal, Entry } from './journal.js';

//Interface Logic

const newJournal = new Journal();
$("#new-entry").submit(function (event) {
  event.preventDefault();
  const inputPostTitle = $("#entry-title").val();
  const inputPostBody = $("#entry-body").val();
  const newEntry = new Entry(inputPostTitle, inputPostBody);
  $("#results").append('<div class="col-md-4 mt-3 mb-3">\n<div class="card">\n  <div class="card-body">\n   <h5 class="card-title">' + newEntry.title + '</h5>\n <p class="card-text">' + newEntry.getTeaser() + '</p>\n  </div> <div class="card-header">\n Post Details\n</div>\n<ul class="list-group list-group-flush">\n  <li class="list-group-item"><strong>Words: </strong>'+newEntry.countWords()+'</li>\n  <li class="list-group-item"><strong>Vowels: </strong>'+newEntry.countVowels()+'</li>\n  <li class="list-group-item"><strong>Cons: </strong>'+newEntry.countCons()+'</li>\n</ul></div>');
  newJournal.addEntry(newEntry);
  
  
  

});

