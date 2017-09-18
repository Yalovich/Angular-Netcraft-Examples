import ConcertModel from "./conecrtModel";

export default class BandModel
{
  video: string;
  upComingCocnerts: [ConcertModel];

  constructor(public name: string, public image: string, public birthday: string, videoUrl?: string) {

    if(videoUrl) this.addVideoUrl(videoUrl);
  }

  /**
   * add a video to band
   * @param url
   * @return {string}
   */
  addVideoUrl(url: string)
  {
    this.video = url;
    return this.video;
  }

  /**
   * add new concert to an artist
   * @param concert
   */
  addConcert(concert: ConcertModel)
  {
    if(!this.upComingCocnerts)
    {
      this.upComingCocnerts = [concert];
      return this;
    }

    this.upComingCocnerts.push(concert);
    return this;
  }
}
