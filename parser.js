const fs = require('fs');

async function fetchPromos() {
  const promos = [
    {
      title: "Скидка 10% на витамины",
      description: "Получите скидку 10% на все витамины iHerb.",
      link: "https://www.iherb.com?rcode=KCR0435"
    },
    {
      title: "20% на спортивное питание",
      description: "Акция действует до конца месяца.",
      link: "https://www.iherb.com?rcode=KCR0435"
    }
  ];
  fs.writeFileSync('promos.json', JSON.stringify(promos, null, 2));
  console.log("promos.json обновлен");
}

fetchPromos();
