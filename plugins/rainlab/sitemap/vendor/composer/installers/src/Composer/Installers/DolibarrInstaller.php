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
    //TODO: Add support for scripts and themes id:117 gh:118
    protected $locations = array(
        'module' => 'htdocs/custom/{$name}/',
    );
}
