<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('obras', function (Blueprint $table) {
            $table->increments('obr_id');
            $table->integer('obr_id_ini')->nullable();
            $table->string('obr_id_type_ini')->nullable();
            $table->text('obr_den')->nullable();
            $table->string('obr_doc')->nullable();
            $table->string('obr_doc_num')->nullable();
            $table->text('obr_org')->nullable();
            $table->string('obr_dis')->nullable();
            $table->string('obr_pro')->nullable();
            $table->string('obr_dep')->nullable();
            $table->string('obr_cp')->nullable();
            $table->string('obr_alt')->nullable();
            $table->string('obr_lng')->nullable();
            $table->string('obr_lat')->nullable();
            $table->date('obr_fec_ini')->nullable();
            $table->integer('obr_dur')->nullable();
            $table->string('obr_est')->nullable();
            $table->integer('obr_cont')->nullable();
            $table->date('obr_fec_fin')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('obras');
    }
}
