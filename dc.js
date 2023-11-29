$('#container > section.left_content > article:nth-child(3) > div.gall_listwrap.list > table > tbody > tr').each((idx, res) => {
  if (Number(res.querySelector('td.gall_recommend').textContent) < 100) {
    res.style.display = 'none';
  }
});
