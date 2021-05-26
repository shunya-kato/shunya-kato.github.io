export type NavbarItem = {
    id: number;
    route: string;
    label: string;
};

export type Event = {
    id: number;
    date: string;
    title: string;
    describe: string;
};

export type SkillItem = {
    id: number;
    title: string;
    icon: string;
};

export type ProductItem = {
    id: number;
    title: string;
    path: string;
    url: string;
};