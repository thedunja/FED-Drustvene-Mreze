
export class FedComment {

    _id: number;
    posts: number;
    user: User;
    rating: number;
    text: string;
    date: Date

    constructor(obj?: any) {

        this._id = obj && obj._id || 0;
        this.posts = obj && obj.posts || 0;
        this.user = obj && obj.user && new User(obj.user) || new User();
        this.rating = obj && obj.rating || 0;
        this.text = obj && obj.text || " ";
        this.date = obj && obj.date || new Date();
    }
}


export class User {

    name: string;
    picture: string;

    constructor(obj?: any) {

        this.name = obj && obj.name || "";
        this.picture = obj && obj.picture || "default.jpg";
    }
}
