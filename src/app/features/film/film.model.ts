export interface Film {
    id: number;
    title: string;
    durationMinutes: number;
    description: string;
    releaseDate: string;
    ageRating: number;
    directorId: number;
    screeningsId: number[];
    actorsId: number[];
    genresId: number[];
}