async getpizza() {
    const res = await fetch("https://3332222.ru/cart/promocode", {
      credentials: "include",
      headers: {
        accept: "*/*",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-csrf-token": "DK0c0CkN-hVvAq_bdqi1dAtLODP7W0b_sIIs",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "https://3332222.ru/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: '{"promo_code":"maf978","product_ids":[]}',
      method: "POST",
      mode: "cors"
    })
      .then(response => {
        return response;
      })
      .then(data => {
        console.log(data);
      });
  }