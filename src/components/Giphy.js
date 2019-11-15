import m from "mithril";

const Giphy = {
  oninit: function () {
    this.loadGif();
    document.title = 'Only The BEST';
  },
  loadGif: function() {
    m.request({
      method: "GET",
      url: 'https://api.giphy.com/v1/gifs/trending?api_key=5DYyxYScARZshsn38FrpiLbFGVFLHcrb&limit=1',
    }).then(res => {
      if (res && Array.isArray(res.data) && res.data[0] && res.data[0].url) {
        this.imgSrc = res.data[0].images.downsized.url;
      }
    }) 
  },
  imgSrc: '',
  view: function () {
    return m("#giphy", [
      m('h1', 'The Best of the Internet, right here:'),
      ...(
        this.imgSrc ? [
          m("img", { src: this.imgSrc, width: '300', height: '300' })
        ] : [
          m("p", '...')
        ]
      )
    ]);
  }
}

export default Giphy;