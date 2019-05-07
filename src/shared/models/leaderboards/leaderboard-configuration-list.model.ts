export interface LeaderboardConfigurationListModel {
    Id: number;
    Name: string;
    Status: string;
    Pid: number;
    Type?: number;
    StartDate: Date;
    EndDate: Date;
    AnnouncementStartDate: Date;
    AnnoincementEndDate: Date;
    SelectedBrands: Array<Brand>;
    SelectedGames: Array<Game>;
}

export interface Brand {
    BrandId: number;
    BrandName: string;
}

export interface Game {
    GameId: number;
    GameName: string;
}