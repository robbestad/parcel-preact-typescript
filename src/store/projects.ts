export default (store:any)=> {
	store.on('@init', () => ({ projects: [] }));

  store.on('projects/add', ({ projects}, project) => {
    return { projects: projects.concat([project]) }
  })
}
