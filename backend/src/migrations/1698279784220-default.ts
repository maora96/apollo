import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698279784220 implements MigrationInterface {
    name = 'Default1698279784220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "color" text NOT NULL, "price" integer NOT NULL, "promotional_price" integer NOT NULL, "product_id" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "product_type" text NOT NULL, "discount" integer NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_a8940a4bf3b90bd7ac15c8f4dd9" FOREIGN KEY ("product_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_a8940a4bf3b90bd7ac15c8f4dd9"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
