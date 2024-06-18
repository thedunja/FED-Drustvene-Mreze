
export class PostResponse {

    postList: Post[];

    constructor(obj?: any) {

        this.postList = obj && obj.postList && obj.postList.map((elem: any) => new Post(elem)) || [];
    }
}


export class Post {

    _id: number;
    text: string;
    user: User;
    date: Date;

    constructor(obj?: any) {

        this._id = obj && obj._id || 0;
        this.text = obj && obj.text || " ";
        this.user = obj && obj.user && new User(obj.user) || new User();
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