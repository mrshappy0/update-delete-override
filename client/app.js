const $ul = document.querySelector("ul");
 
fetch("http://localhost:3000/users")
  .then(response => response.json())
  .then(users => {
    users
      .map(userToElement)
      .map($li => {
        const $form = document.createElement("form");
        $form.action = `http://localhost:3000/users/${$li.dataset.id}`;
        $form.method = "POST";
        $form.innerHTML = `
            <input type="text" placeholder="Name" name="name" value="${$li.dataset.name}"/>
            <input type="submit" value="Update this user" />
            <input type="hidden" name="_method" value="put" />
        `;
        $li.append($form);
        return $li;
      })
      .map($li => {
        const $form = document.createElement("form");
        $form.action = `http://localhost:3000/users/${$li.dataset.id}`;
        $form.method = "POST";
        $form.innerHTML = `
            <input type="submit" value="Delete this user" />
            <input type="hidden" name="_method" value="delete" />
        `;
        $li.append($form);
        return $li;
      })
      .forEach(appendToUl);
  });

function userToElement(user) {
  const $li = document.createElement("li");
  $li.textContent = user.name;
  $li.dataset.id = user.id;
  $li.dataset.name = user.name;
  return $li;
}

function appendToUl($li) {
  $ul.append($li);
}
