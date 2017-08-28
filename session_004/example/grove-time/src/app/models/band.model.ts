class BandModel
{
  isBassPlayer: boolean;

  constructor(public name: string, public image: string) {}

  /**
   *
   * @return {boolean}
   */
  isDrumsPlayer()
  {
    return (this.isBassPlayer ? false : true);
  }
}

export default BandModel;
