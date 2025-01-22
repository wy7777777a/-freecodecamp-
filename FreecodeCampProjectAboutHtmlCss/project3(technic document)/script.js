// 获取所有的按钮
const buttons = document.querySelectorAll('button');

// 遍历按钮，为每个按钮添加点击事件
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 获取当前点击按钮的 name
    const buttonName = button.name;

    // 查找与按钮 name 匹配的文档
    const matchingDocument = document.querySelector(`[name="${buttonName}"]`);

    // 将页面滚动到该文档的位置
    if (matchingDocument) {
      matchingDocument.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

