export interface Cocktail {
    id: number;
    name: string;
    isAlcoholic: boolean; 
    imageUrl:  string;
    instructions: string;
    ingredients: string[];

    //use for save in local storage the favourite cocktails
    isFavourite?: boolean;
}