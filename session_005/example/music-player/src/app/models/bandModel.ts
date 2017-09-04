import ConcertModel from "./concert.model";

/**
 * Created by Yalovich on 03/09/2017.
 */
export default class BandModel
{
  videoUrl: string;
  isBassPlayer: boolean = false;
  concerts: [ConcertModel];

  constructor(public name: string, public image: string, public birthday: string, videoUrl?: string) {

    if(videoUrl) this.addVideoUrl(videoUrl);
  }

  /**
   *
   * @return {BandModel}
   */
  setBassPlayer(): BandModel
  {
    this.isBassPlayer = true;
    return this;
  }

  /**
   *
   * @param concert
   * @return {boolean|void|number}
   */
  addConcert(concert: ConcertModel)
  {
    if(!this.concerts) {
      this.concerts = [concert];
      return;
    }

    return this.concerts.push(concert)
  }

  /**
   * add a video to band
   * @param url
   * @return {string}
   */
  addVideoUrl(url: string)
  {
    this.videoUrl = url;
    return this.videoUrl;
  }
}
