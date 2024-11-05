"use strict";
let cont_section = document.getElementById("Contact");
let cont_btn = document.getElementById("contbtn");
cont_btn?.addEventListener('click', () => {
    cont_section.classList.toggle('hide');
});
let edu_section = document.getElementById("Education");
let edu_btn = document.getElementById("edubtn");
edu_btn?.addEventListener('click', () => {
    edu_section.classList.toggle('hide');
});
let exper_section = document.getElementById("Expertise");
let exper_btn = document.getElementById("experbtn");
exper_btn?.addEventListener('click', () => {
    exper_section.classList.toggle('hide');
});
let lang_section = document.getElementById("Language");
let lang_btn = document.getElementById("langbtn");
lang_btn?.addEventListener('click', () => {
    lang_section.classList.toggle('hide');
});
let ref_section = document.getElementById("Reference");
let ref_btn = document.getElementById("refbtn");
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
let exp_section = document.getElementById("Experience");
let exp_btn = document.getElementById('expbtn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
let print_btn = document.getElementById('printbtn');
print_btn?.addEventListener('click', () => {
    window.print();
});
