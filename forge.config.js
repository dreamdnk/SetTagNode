module.exports = {
  packagerConfig: {
	  name:"TagSetNote",
	  icon:"icon",
	  asar:false
  },
  rebuildConfig: {},
  makers: [
	{
		name: '@electron-forge/maker-squirrel',
		config: {
		},
	},
    {
      name: '@electron-forge/maker-zip'
    }
  ],
};
