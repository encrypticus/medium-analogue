import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationBetweenUserAndComments1722017879269
  implements MigrationInterface
{
  name = 'CreateRelationBetweenUserAndComments1722017879269';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "comments" ADD "userId" integer`);
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`,
    );
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "userId"`);
  }
}
