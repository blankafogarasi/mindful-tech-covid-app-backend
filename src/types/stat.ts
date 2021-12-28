import {RowDataPacket} from 'mysql2';

export interface Stat extends RowDataPacket{
    id: number,
    infected: number,
    activeinfected: number,
    deceased: number,
    recovered: number,
    quarantined: number,
    tested: number,
    updated: Date
}
