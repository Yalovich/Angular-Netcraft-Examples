/**
 * Created by Yalovich on 03/09/2017.
 */
export default class BandModel
{
  videoUrl: string;

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
    this.videoUrl = url;
    return this.videoUrl;
  }
}
