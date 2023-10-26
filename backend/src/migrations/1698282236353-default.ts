import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698282236353 implements MigrationInterface {
    name = 'Default1698282236353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "promotional_price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "promotional_price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "discount" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "discount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "promotional_price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "promotional_price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
    }

}
