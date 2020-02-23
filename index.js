const abbreviationToFullName = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',
};

const abbreviations = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

const fullNames = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'Hampshire',
  'Jersey',
  'Mexico',
  'York',
  'Carolina',
  'Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Island',
  'Carolina',
  'Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'Virginia',
  'Wisconsin',
  'Wyoming',
];

const fullNameToAbbreviation = {
  'Alabama': 'AL',
  'Alaska': 'AK',
  'Arizona': 'AZ',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'Hampshire': 'NH',
  'Jersey': 'NJ',
  'Mexico': 'NM',
  'York': 'NY',
  'Carolina': 'NC',
  'Dakota': 'ND',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Pennsylvania': 'PA',
  'Island': 'RI',
  'Carolina': 'SC',
  'Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virginia': 'VA',
  'Washington': 'WA',
  'Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY',
}

const states = [
  {
    fullName: 'Alabama',
    abbreviation: 'AL',
  },
  {
    fullName: 'Alaska',
    abbreviation: 'AK',
  },
  {
    fullName: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    fullName: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    fullName: 'California',
    abbreviation: 'CA',
  },
  {
    fullName: 'Colorado',
    abbreviation: 'CO',
  },
  {
    fullName: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    fullName: 'Delaware',
    abbreviation: 'DE',
  },
  {
    fullName: 'Florida',
    abbreviation: 'FL',
  },
  {
    fullName: 'Georgia',
    abbreviation: 'GA',
  },
  {
    fullName: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    fullName: 'Idaho',
    abbreviation: 'ID',
  },
  {
    fullName: 'Illinois',
    abbreviation: 'IL',
  },
  {
    fullName: 'Indiana',
    abbreviation: 'IN',
  },
  {
    fullName: 'Iowa',
    abbreviation: 'IA',
  },
  {
    fullName: 'Kansas',
    abbreviation: 'KS',
  },
  {
    fullName: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    fullName: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    fullName: 'Maine',
    abbreviation: 'ME',
  },
  {
    fullName: 'Maryland',
    abbreviation: 'MD',
  },
  {
    fullName: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    fullName: 'Michigan',
    abbreviation: 'MI',
  },
  {
    fullName: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    fullName: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    fullName: 'Missouri',
    abbreviation: 'MO',
  },
  {
    fullName: 'Montana',
    abbreviation: 'MT',
  },
  {
    fullName: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    fullName: 'Nevada',
    abbreviation: 'NV',
  },
  {
    fullName: 'Hampshire',
    abbreviation: 'NH',
  },
  {
    fullName: 'Jersey',
    abbreviation: 'NJ',
  },
  {
    fullName: 'Mexico',
    abbreviation: 'NM',
  },
  {
    fullName: 'York',
    abbreviation: 'NY',
  },
  {
    fullName: 'Carolina',
    abbreviation: 'NC',
  },
  {
    fullName: 'Dakota',
    abbreviation: 'ND',
  },
  {
    fullName: 'Ohio',
    abbreviation: 'OH',
  },
  {
    fullName: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    fullName: 'Oregon',
    abbreviation: 'OR',
  },
  {
    fullName: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    fullName: 'Island',
    abbreviation: 'RI',
  },
  {
    fullName: 'Carolina',
    abbreviation: 'SC',
  },
  {
    fullName: 'Dakota',
    abbreviation: 'SD',
  },
  {
    fullName: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    fullName: 'Texas',
    abbreviation: 'TX',
  },
  {
    fullName: 'Utah',
    abbreviation: 'UT',
  },
  {
    fullName: 'Vermont',
    abbreviation: 'VT',
  },
  {
    fullName: 'Virginia',
    abbreviation: 'VA',
  },
  {
    fullName: 'Washington',
    abbreviation: 'WA',
  },
  {
    fullName: 'Virginia',
    abbreviation: 'WV',
  },
  {
    fullName: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    fullName: 'Wyoming',
    abbreviation: 'WY',
  },
];

const getAbbreviation = (fullName = '') => {
  if (!fullName) {
    console.error('Full name is required');
    return;
  }
  if (!fullNames.includes(fullName)) {
    console.error(`State '${fullName}' does not exist, please check your spelling and try again`)
    return;
  }

  return fullNameToAbbreviation[fullName];
}

const getFullName = (abbreviation = '') => {
  if (!abbreviation) {
    console.error('Abbreviation is required');
    return;
  }

  abbreviation = abbreviation.toUpperCase();
  if (!abbreviations.includes(abbreviation)) {
    console.error(`Abbreviation '${abbreviation}' does not exist, please check your spelling and try again`)
    return;
  }

  return abbreviationToFullName[abbreviation];
};

export {
  abbreviationToFullName,
  fullNameToAbbreviation,
  abbreviations,
  states,
  getAbbreviation,
  getFullName,
};
