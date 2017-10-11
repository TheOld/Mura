<?php
namespace Composer\Installers;

/**
 * Class DolibarrInstaller
 *
 * @package Composer\Installers
 * @author  Raphaël Doursenaud <rdoursenaud@gpcsolutions.fr>
 */
class DolibarrInstaller extends BaseInstaller
{
    //TODO: Add support for scripts and themes id:135 gh:136
    protected $locations = array(
        'module' => 'htdocs/custom/{$name}/',
    );
}
