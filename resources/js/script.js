const source = document.getElementById('popup').innerHTML;

const template = Handlebars.compile(source);

const context = {
    greeting: 'Hello World!'
  }

  const compiledHtml = template(context);

  const fill = document.getElementById('description');

  fill.innerHTML = compiledHtml;
