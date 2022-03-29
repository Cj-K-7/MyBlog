const newPost = ({ subject, templateStyle, imageSrc=null }) => {
  //make section
  const template = document.createElement("section");
  template.classList.add(`${templateStyle}`);

//make div

  //make title
  const title = document.createElement("h1");
  title.classList.add(`title`);
  title.innerText = subject.title;

  //make subtitle
  const subtitle = document.createElement("h2");
  subtitle.classList.add(`subtitle`);
  subtitle.innerText = subject.subtitle;

  //make uploadDay
  const uploadDay = document.createElement("h3");
  uploadDay.classList.add(`uploadDay`);
  uploadDay.innerText = subject.uploadDay;

  //append childs
  template.appendChild(title);
  template.appendChild(subtitle);
  template.appendChild(uploadDay);
  if(imageSrc){}
};
