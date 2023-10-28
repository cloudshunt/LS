function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

//ex locale input: en_US.UTF-8   en_GB.UTF-8


function localGreet(locale){
  let language = extractLanguage(locale);

  let region;
  let greeting;
  
  if (language === 'en'){
    region = extractRegion(locale)
    switch(region){
      case 'US':
        greeting = 'Hey!';
        break;
      case 'GB':
        greeting = 'Hello!';
        break;
      case 'AU':
        greeting = 'Howdy!';
        break;
    }

  } else {
    greeting = greet(language)
  }


  console.log(greeting);
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
