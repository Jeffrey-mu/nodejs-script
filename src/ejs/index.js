import ejs from 'ejs';

ejs.openDelimiter = '{{';
ejs.closeDelimiter = '}}';

const template = `
  <h2>{{%=data%}}</h2>
`;

const data = ejs.render(template, {
  data: 123
});

console.log(data);
