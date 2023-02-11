function solution(today, terms, privacies) {
  const objTerms = terms.reduce((pre, cur) => {
    const [term, period] = cur.split(' ');
    pre[term] = +period;
    return pre;
  }, {});

  return privacies.reduce((pre, cur, idx) => {
    const [date, term] = cur.split(' ');
    const [year, month, day] = date.split('.');
    const newMonth = +month + objTerms[term];

    let newDate = '';
    let tYear = '';
    let tMonth = '';
    if (newMonth > 12) {
      tYear = +year + Math.floor(newMonth / 12);
      tMonth = Math.floor(newMonth % 12);
    } else {
      tYear = year;
      tMonth = newMonth;
    }
    if (tMonth < 10) {
      tMonth = '0' + tMonth;
    }
    newDate = `${tYear}.${tMonth}.${day}`;

    if (newDate > today) {
      pre.push(idx + 1);
    }

    return pre;
  }, []);
}
