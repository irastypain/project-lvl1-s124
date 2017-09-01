import { car, cdr, cons } from 'hexlet-pairs';

export const makeQA = (question, answer) => cons(String(question), String(answer));
export const getQuestion = qa => car(qa);
export const getAnswer = qa => cdr(qa);
