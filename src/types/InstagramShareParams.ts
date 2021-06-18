export default interface InstagramShareParams {
  title: string;
  description: string;
  image: string;
  logo?: string;
  eventParams?: Record<any, string>;
}
