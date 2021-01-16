<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardIndexController
{
    public function __invoke()
    {
        return Inertia::render('Dashboard/Index');
    }
}
