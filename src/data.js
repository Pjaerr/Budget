// ---- Data Management ----
import localforage from 'localforage';

export let data = {
  accounts: [
    {
      name: "Fake Account",
      transactions: []
    },
    {
      name: "Testing Account",
      transactions: []
    }
  ]
};

export const storeData = () =>
{
  //Try add to firebase
  if (false)
  {
    // ! Assume failure until firebase has been implemented
  }
  else //When failed use localforage
  {
    localforage.setItem('accounts', data)
      .then(function (value) 
      {
        console.log("Saved data locally!");
      })
      .catch(function (err)
      {
        console.error(err);
      });
  }
}

export const getData = () =>
{
  // Try get from firebase
  if (false)
  {
    // ! Assume failure until firebase has been implemented
  }
  else //When failed use localforage
  {
    return new Promise((resolve, reject) =>
    {
      localforage.getItem('accounts')
        .then(function (value)
        {
          if (value !== null)
          {
            data = value;
          }

          resolve("Data retrieved locally");
        })
        .catch(function (err)
        {
          console.error(err);

          reject(err);
        });
    });
  }
}

export const createTransaction = (accountName, amount, date, description) =>
{
  for (let i = 0; i < data.accounts; i++)
  {
    if (data.account[i].name === accountName)
    {
      data.account[i].transactions.push({
        description,
        date,
        amount
      });
    }
  }

  storeData();
}