export class AppJapanService {
    getHello(): string {
        console.log(process.env.DB_HOST);
        return 'こんにちは世界!';
    }
}