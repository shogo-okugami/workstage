<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCompanyIdToWorkLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('work_logs', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id')->after('user_id');
            $table->foreign('company_id')->references('id')->on('companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('work_logs', function (Blueprint $table) {
            $table->dropForeign('work_logs_company_id_foreign');
            $table->dropColumn('company_id');
        });
    }
}
