<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        \App\Models\Category::factory()->create([
            'id' => 1,
             'name' => 'Category A',
             'master_category_id'=>null,
         ]);
        \App\Models\Category::factory()->create([
            'id' => 2,
             'name' => 'Category B',
             'master_category_id'=>null,
         ]);
        \App\Models\Category::factory()->create([
            'id' => 3,
             'name' => 'SUB B1',
             'master_category_id'=>2,
         ]);
        \App\Models\Category::factory()->create([
            'id' => 4,
             'name' => 'SUB B2',
             'master_category_id'=>2,
         ]);
        \App\Models\Category::factory()->create([
            'id' => 5,
             'name' => 'SUB SUB B2-1',
             'master_category_id'=>4,
         ]);
        \App\Models\Category::factory()->create([
            'id' => 6,
             'name' => 'SUB SUB B2-1',
             'master_category_id'=>4,
         ]);
    }
}
