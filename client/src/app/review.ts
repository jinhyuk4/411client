export class Review {
    review_id: string = '';
    user_id: string = '';
    ratings: number = 0;
    review_text: string = '';
}

export class Movie {
    movie_id:string = '';
    // director?:string = '';
    release_year:number = 0;
    ratings:number = 0;
    movie_name:string = '';
    genre:string = '';
    length:number = 0;
}