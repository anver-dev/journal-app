export default () => ({
  isLoading: true,
  entries: [
    {
      date: new Date().toDateString(),
      id: new Date().getTime(),
      picture: null,
      text: "Officia qui cillum excepteur exercitation duis proident amet consectetur ad eu. Ipsum consectetur incididunt cupidatat velit amet. Officia laboris do nulla nostrud ut aliquip pariatur sit sint occaecat ex nisi anim voluptate.",
    },
    {
      date: new Date().toDateString(),
      id: new Date().getTime() + 1000,
      picture: null,
      text: "Nostrud dolore incididunt sunt dolor ut. Incididunt eiusmod exercitation exercitation cillum eiusmod pariatur nisi ut adipisicing. Adipisicing tempor ullamco tempor est consectetur. Laboris occaecat ullamco reprehenderit voluptate ut nulla est ullamco id veniam minim sunt cillum.",
    },
  ],
});
